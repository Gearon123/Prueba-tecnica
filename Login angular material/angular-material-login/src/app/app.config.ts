import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// Importamos el proveedor de HttpClient para la comunicación con el servidor
import { provideHttpClient } from '@angular/common/http'; 

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Proveedor para la navegación de rutas
    provideRouter(routes),
    
    // Proveedor necesario para que HttpClient funcione y se conecte a la API
    provideHttpClient() 
  ]
};