import React, { useEffect, useState } from 'react';
import axiosWitAuth from '../../utils/axiosWithAuth'
import {NavLink} from 'react-router-dom';
import '../../styles/edit.css';

const editingState = {
    item: '',
    description: '',
    price: '',
    category: '',
}

const initialState = {
    
}

export default function EditItem (props) {
    const [stuff, setStuff] = useState(initialState)
    useEffect(() => {
        axiosWitAuth()
        .get(`/techstuff/items/${props.match.params.id}`)
        .then(res => setStuff(res.data))
        .catch(err => console.log(err))
    }, [props.match.params.id])

    const handleChange = e => {
        setStuff({...stuff, [e.target.name]: e.target.value})
    }

  

    const handleSubmit = e => {
        e.preventDefault()
        axiosWitAuth()
        .put(`/techstuff/${props.match.params.id}`, stuff)
        .then(res => {
            setStuff(editingState)
            props.history.push(`/myitems`)
        })
        .catch(err => console.log(err))
    }
    console.log(initialState)
    return (
        <div className='updateContainer'>
            <div className='update-top'>
            <h4>umts</h4>
                <NavLink to='/myitems'><button>Back</button></NavLink>
            </div>
            <h1>Update Item</h1>
            <form className='update-form' onSubmit={handleSubmit}>
                <input type='text' name='item' value={stuff.item} onChange={handleChange} placeholder='Name'></input>
                <input type='text' name='description' value={stuff.description} onChange={handleChange} placeholder='Description'></input>
                <input type='text' name='price' value={stuff.price} onChange={handleChange} placeholder='Price'></input>
                <input type='text' name='category' value={stuff.category} onChange={handleChange} placeholder='Category'></input>
                <button className='updateButton'>Update</button>
            </form>
        </div>
    )
}
