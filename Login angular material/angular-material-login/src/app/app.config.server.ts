import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

// Definición de la Configuración del Servidor
// 1. Definición de la Configuración del Servidor
const serverConfig: ApplicationConfig = {
  providers: [
    // Habilita el renderizado del lado del servidor (SSR)
    provideServerRendering(
      //Registra rutas específicas que solo se manejarán en el servidor.
      // Aquí se usaría si tuvieras rutas diferentes a las del cliente.
      withRoutes(serverRoutes) 
    )
  ]
};

//Fusión de Configuraciones
// Unimos la configuración base de la aplicación (appConfig, que incluye HttpClient y Router) 
// con la configuración de renderizado del servidor (serverConfig).
// Esto crea un único objeto 'config' que se usa para iniciar la aplicación en el entorno de Node.js (servidor).
export const config = mergeApplicationConfig(appConfig, serverConfig);