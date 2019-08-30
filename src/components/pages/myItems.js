import React, { Component } from 'react';
import ItemCard from './itemCard';
import { fetchItem } from '../../store/actions';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../../styles/myItems.css'; 


class MyItems extends Component {
    
    componentDidMount(){
        this.props.fetchItem();
    }
    render() {
        // console.log('O', this.props)
        return (
            <div className='myitems-page'>
                <div className='myitems-top'>
            <h4>umts</h4>
            <div>
                <NavLink to='/add'><button>Add Item</button></NavLink>
                <NavLink to='/protected'><button>Back</button></NavLink>
            </div>
            </div>
            <h1>My Items</h1>
            <div className='cards-container'>
                {this.props.data.map(data =>
                <ItemCard key={data.id} data={data}/>
                )}
            </div>
            </div>
        )
    }
}


const mapStateToProps = state =>   ({
    data: state.itemReducer.data,
    fetching: state.itemReducer.fetching,
    error: state.itemReducer.error
   })
export default connect(mapStateToProps, {fetchItem}) (MyItems)