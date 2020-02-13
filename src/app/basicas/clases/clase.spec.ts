import { Jugador } from './clase';
    
    //beforeAll() -> Antes de que se ejecuten todas
    //beforeEach() -> Se ejecuta antes de empezar una prueba

    //afterAll() -> Se ejecuta despues de todas las pruebas
    //afterEach() -> Se ejecuta cada vez que termina una prueba

describe('Pruebas de clase', () => {
    let jugador = new Jugador();
    
    beforeEach(() => {
        jugador = new Jugador();
    });

    it('Debe de retornar 80 de hp si recibe 20 de daño', () => {
        const respuesta = jugador.recibeDanio(20);

        expect(respuesta).toBe(80);
    });

    it('Debe de retornar 50 de hp si recibe 50 de daño', () => {
        
        const respuesta = jugador.recibeDanio(50);

        expect(respuesta).toBe(50);
    });

    it('Debe de retornar 0 de hp si recibe 100 de daño', () => {
        
        const respuesta = jugador.recibeDanio(100);

        expect(respuesta).toBe(0);
    });

});