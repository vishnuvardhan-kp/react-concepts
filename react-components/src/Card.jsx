import Image from './assets/React.png'
function Card() {
    return (
        <div className = "card">
            <img className = "card-img" src = {Image} alt = "Alternate Text"></img>
            <h2 className = "card-head">React Component</h2>
            <p className = "card-text">We use components for the reusability</p>
        </div>
    );
}

export default Card;