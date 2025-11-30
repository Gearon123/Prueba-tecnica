//Test unitario de angular

import { ComponentFixture, TestBed } from '@angular/core/testing'; 
// IMPORTACIÓN: herramientas de Angular para pruebas unitarias

import { Dashboard } from './dashboard';
// IMPORTACIÓN: componente Dashboard a probar

describe('Dashboard', () => {
// FUNCIÓN describe(): agrupa las pruebas del componente

  let component: Dashboard; 
  // VARIABLE: instancia del componente Dashboard

  let fixture: ComponentFixture<Dashboard>;
  // VARIABLE: envuelve el componente para manipularlo en pruebas

  beforeEach(async () => {
  // MÉTODO beforeEach(): se ejecuta antes de cada prueba

    await TestBed.configureTestingModule({
      imports: [Dashboard]
      // CONFIGURACIÓN: módulo de pruebas que importa el componente
    })
    .compileComponents(); 
    // MÉTODO: compila los componentes antes de usarlos

    fixture = TestBed.createComponent(Dashboard);
    // MÉTODO: crea una instancia visual del componente

    component = fixture.componentInstance;
    // VARIABLE: obtiene la instancia del componente creado

    fixture.detectChanges();
    // MÉTODO: aplica detección de cambios para inicializar el componente
  });

  it('should create', () => {
  // BLOQUE DE PRUEBA: prueba que el componente se crea correctamente

    expect(component).toBeTruthy();
    // EXPECT: verifica que el componente exista
  });
});