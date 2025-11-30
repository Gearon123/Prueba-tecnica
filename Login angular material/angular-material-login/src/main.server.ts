// Importamos el tipo `BootstrapContext` (contexto de arranque, útil en SSR/entornos especiales)
// y la función `bootstrapApplication` que arranca la aplicación basada en un componente raíz.
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';

// Importamos el componente raíz de la aplicación.
// Se asume que `App` es un componente (por ejemplo: @Component({ ... }) export class App { })
import { App } from './app/app';

// Importamos una configuración extra (probablemente providers, rutas, etc.)
// El nombre del archivo sugiere que es configuración orientada a servidor (SSR).
import { config } from './app/app.config.server';

// Declaramos una función `bootstrap` que recibe un `context` de tipo `BootstrapContext`.
// Esta función envuelve la llamada a `bootstrapApplication` para arrancar la app usando:
//  - `App` como componente raíz,
//  - `config` con la configuración de la aplicación (providers, inicializadores, etc.),
//  - `context` (información adicional de arranque, útil en entornos server-side).
const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

// Exportamos `bootstrap` como default para poder importarlo fácilmente desde otro módulo
// (por ejemplo desde el entry-point del servidor o de pruebas).
export default bootstrap;