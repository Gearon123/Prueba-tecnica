// Importamos 'zone.js', una dependencia obligatoria para Angular.
// Zone.js permite que Angular detecte cambios de estado automáticamente
// y actualice la interfaz sin necesidad de código manual.
import 'zone.js'; 

// Importamos la función que inicializa la aplicación Angular en el navegador.
// 'bootstrapApplication' se usa en aplicaciones modernas basadas en componentes standalone.
import { bootstrapApplication } from '@angular/platform-browser';

// Importamos la configuración principal de la aplicación.
// 'appConfig' contiene providers, servicios, rutas, etc.
import { appConfig } from './app/app.config';

// Importamos el componente raíz de la aplicación.
// En este caso es el componente 'App', que actúa como punto de entrada de la aplicación.
import { App } from './app/app';

// Iniciamos la aplicación pasando:
// 1. El componente raíz (App)
// 2. La configuración (appConfig)
// Si ocurre algún error durante el arranque, se imprime en la consola.
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));