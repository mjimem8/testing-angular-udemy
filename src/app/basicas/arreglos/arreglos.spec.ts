import { obtenerRobots } from './arreglos';

describe('Pruebas de arreglos', () => {

    it('Debe de retornar al menos 3 robots', () => {
        const respuesta = obtenerRobots();

        //mayor o igual que 3
        expect(respuesta.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir Ironman y Superman', () => {
        const respuesta = obtenerRobots();

        //mayor o igual que 3
        expect(respuesta).toContain('Ironman');
        expect(respuesta).toContain('Superman');
    });

});