import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                {
                    images.map( img => 
                        <GridItem 
                            {...img} 
                            key = {img.id}
                        />
                    )
                }                
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};