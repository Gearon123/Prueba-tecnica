import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Para conexión con la API

@Component({
  selector: 'app-login',
  standalone: true, // Componente independiente (Standalone)
  imports: [FormsModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule], // Módulos usados
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export default class Login {  // CLASE Login
  
  private API_URL = 'http://localhost:3000/api/login'; // VARIABLE: URL de la API
  
  user = { //  VARIABLE: modelo de datos del formulario
    name: '',
    email: '',
    password: '',
  };

  constructor(private router: Router, private http: HttpClient) {} // CONSTRUCTOR con dependencias

  login() { //  MÉTODO: ejecuta el proceso de inicio de sesión

    //  Validación básica del nombre en el frontend
    if (!this.user.name || this.user.name.trim() === '') {
        alert('Por favor, ingresa tu Nombre.');
        return; 
    }

    // VARIABLE: datos enviados a la API
    // CORRECCIÓN: Ahora incluimos 'nombre' para que el servidor lo verifique.
    const datosEnvio = {
        nombre: this.user.name, // <--- Dato nuevo para validación estricta
        correo: this.user.email,
        contrasena: this.user.password
    };

    console.log('Enviando datos al servidor:', datosEnvio);

    //  Petición HTTP POST a la API
    this.http.post(this.API_URL, datosEnvio).subscribe({

        next: (response: any) => { // MANEJADOR DE RESPUESTA EXITOSA
            console.log('El servidor respondió:', response);
            
            if (response.success) { // Validación de éxito
                const userData = response.usuario || response.user; // VARIABLE: datos del usuario
                // Usamos el nombre que viene de la BD para asegurar que es el correcto
                const userName = userData.nombre || userData.name || 'Usuario'; 
                
                localStorage.setItem('loggedinUser', JSON.stringify(userData)); // Guarda sesión

                alert(`¡Login Correcto! Bienvenido ${userName}.`);
                this.router.navigate(['/dashboard']); //  Redirección
            }
        },

        error: (error) => { //  MANEJADOR DE ERROR DE LA API
            console.error('Error de conexión:', error);

            if (error.status === 401) {
                // Mensaje actualizado para reflejar que el nombre también cuenta
                alert('Nombre, Correo o Contraseña incorrectos.');
            } else if (error.status === 400) {
                alert('Faltan datos. Por favor llena todos los campos.');
            } else if (error.status === 0) {
                alert('¡No se puede conectar al servidor! Asegúrate de ejecutar tu API.');
            } else {
                alert('Ocurrió un error inesperado.');
            }
        }
    });
  }
}