import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {

    it('Debe de retornar true', () => {
        const repuesta = usuarioIngresado();

        //comprueba si es true
        expect(repuesta).toBeTruthy();
    });

});