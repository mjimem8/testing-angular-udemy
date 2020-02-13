import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { empty, Observable, Subject } from 'rxjs';

class FakeRouter {
  navigate(params) {
      
  }
}

class FakeActivatedRoute {
    //params: Observable<any> = empty();
    
    //permite insertar valores a un observable
    private Subject = new Subject();

    push (valor) {
      this.Subject.next(valor);
    }

    get params() {
      return this.Subject.asObservable();
    }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        //sirve para sustituir providers
        //se hace simplemente para no tener que implementar toda la clase
        //ya que solo se va a utilizar varias propiedades,y no todas
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({id: 'nuevo'});

    expect(component.id).toBe('nuevo');
  });

  
});
