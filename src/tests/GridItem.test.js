import {shallow} from 'enzyme';

import { GridItem } from "../components/GridItem";

describe('Pruebas a <GridItem />', () => {

    const attrs = {
        url: 'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=c8516906kvu2qatjv5ni3dvg8x9tquagc2o32ei4rql1oj8j&rid=giphy.gif&ct=g',
        title: 'One Punch Man GIF'
    };

    const wrapper = shallow(<GridItem {...attrs}/>);

    test('Debe mostrar <GridItem />', () => {      
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar un párrafo en el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(attrs.title);
    });

    test('La imagen debe tener el atributo src igual al url y el alt igual al title', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(attrs.url);
        expect(img.prop('alt')).toBe(attrs.title);
    })

    test('Debe tener la clase animate__fadeIn', ()=>{
        const div = wrapper.find('div');

        const includesAnimateFadeIn = div.prop('className')
        .includes('animate__fadeIn');

        expect(includesAnimateFadeIn).toBe(true);
    })
})