import PropTypes from "prop-types";

export const GridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img 
                alt={title}
                src={url}
            />
            <p>{title}</p>
        </div>
    );
}

GridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}