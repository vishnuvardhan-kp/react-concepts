import Image from './assets/React.png';
import PropTypes from "prop-types";

function Card({heading = "Sample" , text = "Sample text using default props"}) {
    return (
        <div className = "card">
            <img className = "card-img" src = {Image} alt = "Alternate Text"></img>
            <h2 className = "card-head">{heading}</h2>
            <p className = "card-text">{text}</p>
        </div>
    );
}

Card.propTypes = {
    heading : PropTypes.string,
    text : PropTypes.string,
};

export default Card;