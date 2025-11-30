import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server'; // Rutas específicas para el servidor

// 1. Definición de la Configuración del Servidor
const serverConfig: ApplicationConfig = {
  providers: [
    // Habilita el renderizado del lado del servidor (SSR).
    // Esto permite que Node.js procese Angular antes de enviarlo al navegador.
    provideServerRendering(
      // Registra rutas específicas que solo se manejarán en el servidor (si son diferentes).
      withRoutes(serverRoutes) 
    )
  ]
};

// 2. Fusión de Configuraciones
// mergeApplicationConfig une la configuración base (appConfig, que tiene el HttpClient, Router, etc.) 
// con la configuración especial del servidor (serverConfig).
// Esto asegura que la aplicación cliente y la aplicación servidor usen una base común, 
// pero que la versión del servidor tenga los proveedores específicos de SSR.
// Esto crea un único objeto 'config' que se usa para iniciar la aplicación en el entorno de Node.js.
export const config = mergeApplicationConfig(appConfig, serverConfig);