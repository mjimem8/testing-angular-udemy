import { incrementar } from './numeros';

describe ('Pruebas de numeros', () => {
    
    it('Debe retornar 100 si el número ingresado es mayor que 100', () => {
        const respuesta = incrementar(300);

        expect(respuesta).toBe(100);
    });

    it('Debe retornar el número ingresado mas 1 si es menor que 100', () => {
        const respuesta = incrementar(50);

        expect(respuesta).toBe(51);
    });
})