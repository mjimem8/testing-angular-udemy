import { mensaje } from './string';

describe('Pruebas de strings', () => {

    it('Debe de regresar un string', () => {
        const respuesta = mensaje('Fernando');

        //igual sintacticamente
        expect(typeof respuesta).toBe('string');
    });

    it('Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan';
        const respuesta = mensaje(nombre);

        //contiene
        expect(respuesta).toContain(nombre);
    });

});
