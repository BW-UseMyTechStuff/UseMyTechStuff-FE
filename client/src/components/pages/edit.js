import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem, itemDetail } from "../../store/actions";

class EditForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: this.props.editItem || {
                "item":'',
                "description":'',
                "category":'',
                "price":'',
                "id":'',
            }
        }
    }

    //  thisItem = {
    //     "item":'',
    //     "description":'',
    //     "category":'',
    //     "price":'',
    //     "id":'',
    // }

    componentDidMount(){
        itemDetail(this.props.match.params.id)
        this.setState({...this.state})
        
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateItem(this.state.items.id, this.state.items)
        this.props.history.push(`/myitems`)
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({items: {...this.props.editItem, [event.target.name]: event.target.value} });
    };

      render() {
          console.log('PROPS: ', this.state)
          return (
              <div>
                  <form>
                    Name:{' '}
                    <input 
                        type='text'
                        name='title'
                        value={this.state.item}
                        onChange={this.handleItemChange}
                    />
                    Description:{' '}
                    <input 
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleItemChange}
                    />
                    Category:{' '}
                    <input 
                        type='text'
                        name='category'
                        value={this.state.category}
                        onChange={this.handleItemChange}
                    />
                    Price:{' '}
                    <input 
                        type='text'
                        name='price'
                        value={this.state.price}
                        onChange={this.handleItemChange}
                    />
                    <button type='submit' onClick={this.editRecipe}>Update</button>
                  </form>
              </div>
          )
      }
}

export default connect(null,{updateItem, itemDetail}) (EditForm);