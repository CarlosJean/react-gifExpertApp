import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [category, setCategory] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();        
        if (category.trim().length > 2) {
            setCategories( categories =>[category, ...categories]);
            e.target.reset();
        }
    };

    const handleOnChange = (e) => {
        setCategory(e.target.value);         
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Ingrese algo"
                onChange={handleOnChange}
            />
            <button type="reset">Limpiar</button>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}