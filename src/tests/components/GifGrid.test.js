import { shallow } from 'enzyme';

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //Crea el mock del custom hook.

describe('Pruebas al componente <GifGrid />', () => {

    const category = 'cheesburguer';

    test('El componente debe coincidir con el snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( < GifGrid category = {category}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items', () => {
        useFetchGifs.mockReturnValue({
            data: [{
                id: '12348946qd6',
                title: 'Cualquier cosa',
                url: 'https://algo.com/cualquier/cosa'
            }],
            loading: false
        });

        const wrapper = shallow( < GifGrid category = {category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GridItem').exists()).toBe(true);
    });
});