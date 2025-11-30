import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  // Módulos importados para el componente standalone
  imports: [CommonModule, MatCardModule, MatButtonModule], 
  standalone: true, // Indica que este componente no depende de un módulo
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {  // Clase del componente
  
  userName: string = 'Usuario';  // Variable: nombre del usuario
  userEmail: string = '';        // Variable: correo del usuario

  constructor(private router: Router) {} // Constructor con inyección del Router

  ngOnInit(): void {  // Método del ciclo de vida al iniciar el componente
    this.loadUserData();
  }

  loadUserData() { // Método: carga datos guardados del usuario
    const userData = localStorage.getItem('loggedinUser');
    
    if (userData) {
      try {
        const user = JSON.parse(userData); // Convierte JSON a objeto
        this.userName = user.name || 'Invitado'; // Asigna nombre
        this.userEmail = user.email || '';       // Asigna correo
      } catch (e) {
        console.error("Error al parsear datos de usuario de localStorage:", e);
        this.router.navigate(['/login']); // Redirige si hay error
      }
    } else {
      this.router.navigate(['/login']); // Redirige si no hay datos
    }
  }

  logout() { // Método: cierre de sesión
    localStorage.removeItem('loggedinUser'); // Elimina datos del usuario
    this.router.navigate(['/login']); // Redirige al login
  }
}