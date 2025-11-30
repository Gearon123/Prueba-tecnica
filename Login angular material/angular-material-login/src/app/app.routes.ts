import { Routes } from '@angular/router';
// Importación corregida (sin llaves y con alias) porque Login es una exportación por defecto.
import LoginComp from './login/login'; 
import { Dashboard } from './dashboard/dashboard'; 

export const routes: Routes = [
    // Ruta principal del login
    { path: 'login', component: LoginComp }, 
    
    // Ruta a la que se redirige después del login exitoso
    { path: 'dashboard', component: Dashboard },
    
    // Redirige la URL base (/) a /login
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    
    // Captura cualquier otra ruta no encontrada y redirige a /login
    { path: '**', redirectTo: '/login' } 
];