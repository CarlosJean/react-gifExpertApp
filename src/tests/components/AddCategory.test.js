import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom'; //Para hacer mock de una función.


describe('Pruebas al componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe mostrar el componente <AddCategory />', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto.', ()=>{
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('No debe realizar el submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe realizar el submit', () => {
        const value = 'Hola Mundo';
        
        const input = wrapper
        .find('input')
        .simulate('change', {target:{value}});

        wrapper
        .find('form')
        .simulate('submit', {preventDefault(){}});
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(input.prop('value')).toBe('');
    });
});