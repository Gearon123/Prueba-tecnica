import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importamos el componente de Login. Usamos la sintaxis 'import Login' porque
// en el archivo login.ts usamos 'export default class Login'.
import Login from './login'; 

describe('Login', () => {
  // Declaramos variables que usaremos en las pruebas:
  let component: Login; // Instancia del componente Login
  let fixture: ComponentFixture<Login>; // Contenedor de prueba del componente

  // La función 'beforeEach' se ejecuta antes de cada prueba ('it').
  beforeEach(async () => {
    // Configura el ambiente de prueba de Angular para este componente.
    await TestBed.configureTestingModule({
      // Declaramos los módulos o componentes que Login necesita importar para funcionar.
      // Como Login es standalone, lo importamos directamente.
      imports: [Login] 
    })
    .compileComponents(); // Compila los templates y CSS del componente.

    // Crea una instancia del componente dentro del entorno de prueba.
    fixture = TestBed.createComponent(Login);
    // Asignamos la instancia de la clase para que podamos acceder a sus métodos (ej. login()).
    component = fixture.componentInstance;
    // Dispara la detección de cambios inicial (equivale al ciclo de vida OnInit).
    fixture.detectChanges();
  });

  // --- Prueba Principal: La prueba unitaria ---
  it('should create', () => {
    // Verificamos que la variable 'component' exista y no sea nula.
    // Esto confirma que el componente se inicializó correctamente en el setup.
    expect(component).toBeTruthy();
  });
});