import React, { Component } from 'react';
import { addItem } from '../../store/actions';
import {connect} from 'react-redux'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {
                description: '',
            }
        
            
        }
        console.log('MY ITEMS: ',props.stuff)
    }
    handleSubmit = event => {
        event.preventDefault();
        const {description} = this.state;
        this.props.addItem({description})
        this.setState({description: ''})
    }
    handleChange = event => {
        event.preventDefault();
        this.setState({item: {...this.state.item, [event.target.name]: event.target.value} })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form>
                <input type='text' value={this.state.item.description} name='description' onChange={this.handleChange}/>
                <button type='submit' onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {error:state.error}
   }
  
  export default connect(mapStateToProps,{addItem})(Post)