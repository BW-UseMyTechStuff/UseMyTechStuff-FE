import React, { Component } from 'react';
import ListedItem from './listedItem';
import { fetchItem } from '../../store/actions';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

class ItemPage extends Component {
    
    componentDidMount(){
        this.props.fetchItem();
    }
    render() {
        console.log('P: ', this.props.data)
        return (
            <div className='myitems-page'>
                {/* <div className='myitems-top'>
            <h4>umts</h4>
            <NavLink to='/protected'><button>Back</button></NavLink>
            </div>
            <h1>My Items</h1> */}
                {this.props.data.map(data =>
                <ListedItem key={data.id} data={data}/>
                )}
            </div>
        )
    }
}


const mapStateToProps = state =>   ({
    data: state.itemReducer.data,
    fetching: state.itemReducer.fetching,
    error: state.itemReducer.error
   })
export default connect(mapStateToProps, {fetchItem}) (ItemPage)