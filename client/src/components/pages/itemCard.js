import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateItem, deleteItem } from '../../store/actions';
import {NavLink} from 'react-router-dom';
import '../../styles/itemCard.css';

const ItemCard = (props) => {
    
    return (
        <div className='item-card'>
            
                <h2>{props.data.item}</h2> 
                <img src='https://via.placeholder.com/100'alt='placeholder'/>
                <p>Description : {props.data.description}</p>
                <p>Price : ${props.data.price}/Day</p>
                <p>Category : {props.data.category}</p>
            
            <div className='btnctnr'>
                {/* <NavLink to={`/item/${props.stuff.id}`}><button>View</button></NavLink> */}
                <NavLink to={`/items/${props.data.id}/edit`}><button>Edit</button></NavLink>
                <button onClick={()=> props.deleteItem(props.data.id)}>Delete</button>   
            </div>           
        </div>
        
    )
}


export default connect(null,{updateItem,deleteItem})(ItemCard); 