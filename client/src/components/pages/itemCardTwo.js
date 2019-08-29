import React from 'react';
import '../../styles/itemCard.css'

const ItemCardTwo = (props) => {
    return (
        <div className='item-card'>
            <h1>{props.description}</h1>
            <img src={props.src} alt={props.alt}/>
            <p>{props.model}</p>
            <p>{props.sku}</p>
            
            <div>
                <button>Rent</button>
            </div>
        </div>
    )
}

export default ItemCardTwo