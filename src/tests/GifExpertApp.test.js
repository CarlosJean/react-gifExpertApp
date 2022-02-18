import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas al componente GifExpertApp', () => {
    test('Debe coincidir con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe coincidir con la cantidad de grids.', () => {

        const categories =  ['One Punch', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});