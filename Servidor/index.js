const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json()); 

const dbPath = path.resolve(__dirname, 'Base_de_datos'); 

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado exitosamente a la base de datos SQLite.');
    }
});

// --- ENDPOINT PARA LOGIN (POST) ---
app.post('/api/login', (req, res) => {
    // 1. AHORA RECIBIMOS TAMBIÉN EL 'nombre'
    const { nombre, correo, contrasena } = req.body;

    // 2. Validación: Si falta alguno de los 3 datos, rechazamos la petición.
    if (!nombre || !correo || !contrasena) {
        return res.status(400).json({ success: false, message: "Faltan datos: Nombre, Correo o Contraseña" });
    }

   
    const sql = `
        SELECT 
            c.id,
            n.nombre, 
            c.correo 
        FROM correo c
        JOIN contrasena p ON c.id = p.id
        JOIN nombre n ON c.id = n.id
        WHERE c.correo = ? AND p.contrasena = ? AND n.nombre = ?
    `;

    // 4. Pasamos los 3 parámetros en orden: [correo, contrasena, nombre]
    db.get(sql, [correo, contrasena, nombre], (err, row) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Error de servidor", error: err.message });
        }

        if (row) {
            // Si 'row' existe, significa que LOS 3 DATOS coinciden con un usuario.
            res.json({ 
                success: true, 
                message: "Login exitoso", 
                usuario: row 
            });
        } else {
            // Si el nombre, el correo o la contraseña no coinciden, devolvemos error.
            res.status(401).json({ success: false, message: "Nombre, Correo o Contraseña incorrectos" });
        }
    });
});

// ... (Resto de endpoints GET se mantienen igual) ...

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});