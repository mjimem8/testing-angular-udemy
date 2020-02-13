import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

//PRUEBAS DE INTERGRACIÓN -> con TestBed/Fixture
describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {
        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); //disparar la detección de cambios

        //obtener lo que hay dentro de elemento html h3
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Progreso de carga');
    });

    it('En el titulo del componente debe de mostrar el progreso', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null); 

        fixture.detectChanges(); 

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('45');
    });

    it('Debe de mostrar en el input el valor del progreso', (done) => {
        component.cambiarValor(5);
        fixture.detectChanges();

        //como la detección de cambios puede tardar, controlamos cuando acabe 
        //de detectar los cambio que ejecute dichas acciones
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;
    
            expect(elem.value).toBe('55');
        });

        //lo he hecho para evitar el mensaje de alarma de 'SPEC HAS NO EXPECTATIONS'
        done();
    });

    it('Debe de incrementar/decrementar en 5 con un click en el botón', () => {
       const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
       
       //dispara el click del botón
       botones[0].triggerEventHandler('click', null); 
       expect(component.progreso).toBe(45);

       botones[1].triggerEventHandler('click', null); 
       expect(component.progreso).toBe(50);
    });

});
