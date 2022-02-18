import { getGifs } from "../../helpers/getGifs";

describe('Pruebas para el helper getGifs', () => {
    test('Debe retornar 10 elementos.', async() => {
        const gifs = await getGifs('one punch');
        expect(gifs.length).toBe(10);
    });
    
    test('Debe retornar 0 elementos.', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});