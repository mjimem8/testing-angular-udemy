import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {
        
        const medicos = ['medico1', 'medico2', 'medico3'];

        //En el momento que se utilice la function 'getMedicos'
        //la sustituye por la marcada en el codigo
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            //retorna un observable con los medicos
            return from([medicos]);
        });

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe de llamar al servidor para agregar un medico', () => {
        
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return empty();
        });
        
        componente.agregarMedico();
        
        //el metodo ha sido llamado al agregar medico
        expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo médico al arreglo de médicos', () => {
        const medico = {id: 1, nombre: 'Manolo'};

        spyOn(servicio, 'agregarMedico')
        .and.returnValue( from([medico]) );

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adición, la propiedad mesajeError debe de ser igual al error del servicio', () => {
    
        const miError = 'No se pudo agregar el médico';

        spyOn(servicio, 'agregarMedico').and.returnValue(
            throwError(miError)
        );

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);
    });

    it('Debe de llamar al servidor para borrar un médico', () => {
    
        //un espia para que no tengamos que confirmar manualmente 
        //si desea borrar un medico
        //este alert desencadena el servicio de borrarMedico
        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico')
            .and.returnValue(empty());

        componente.borrarMedico('1');

        //ha sido llamado con dicho parametro
        expect(espia).toHaveBeenCalledWith('1');

    });

    it('No debe de llamar al servidor para borrar un médico', () => {
    
        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico')
            .and.returnValue(empty());

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');

    });


});
