import React, {Component} from "react"
import { addItem, fetchItem } from "../../store/actions";
import {connect} from 'react-redux';
import '../../styles/addItem.css';

class AddItemForm extends Component {
    // constructor(props){
    //     super(props)
        state = {
                item: '',
                description: '',
                price: '',
                category: '',
                // model: '',
                // sku: '',
                // status: '',
                // warranty: '',
                // features1: '',
                // features2: '',
                // features3: '',
                // features4: '',
                // features5: '',
        }
    // }

    handleSubmit = event => {
        event.preventDefault()
        const {item, description, price, category, model, sku, status, warranty, features1, features2, features3, features4, features5} = this.state
        this.props.addItem({item, description, price, category, model, sku, status, warranty, features1, features2, features3, features4, features5})
        this.setState({ 
            item: '',
            description: '',
            price: '',
            category: '',
            // model: '',
            // sku: '',
            // status: '',
            // warranty: '',
            // features1: '',
            // features2: '',
            // features3: '',
            // features4: '',
            // features5: '',
        })
        this.props.history.push('/myitems');
    }
    

    handleChange = event => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
      };

      render() {
          console.log('ADD: ',this.state)
          return (
            <form className='add-form'>
                <h4>umts</h4>
                <div className='add-page' id='page1'>
                    <div className='add-input'>
                        <h3>1. What kind of product are you listing?</h3>
                        <select name='category' value={this.state.category} onChange = {this.handleChange}>
                            <option>Select a Category</option>
                            <option value='TV or Home Theater'>TV or Home Theater</option>
                            <option value='Desktops or Laptops'>Desktops or Laptops</option>
                            <option value='Cameras'>Cameras</option>
                            <option value='Appliances'>Appliances</option>
                            <option value='Audio'>Audio</option>
                            <option value='Gadget'>Gadget</option>
                        </select>
                    </div>
                    <div className='add-buttons'>
                        <a href='#page2'>Next</a>
                    </div>
                </div>
                <div className='add-page' id='page2'>
                    <div className='add-input'>
                        <h3>2. How long has this product been used for?</h3>
                        {/* <select name='category' onChange = {this.handleChange}>
                            <option>Select a Timeframe</option>
                            <option value='coupleweeks'>Couple Weeks</option>
                            <option value='sixmonths'>6 months</option>
                            <option value='oneyear'>1 year</option>
                            <option value='oneyearplus'>More than 1 year</option>
                        </select> */}
                    </div>
                    <div className='add-buttons'>
                        <a href='#page1'>Back</a>
                        <a href='#page3'>Next</a>
                    </div>
                </div>
                <div className='add-page' id='page3'>
                <div className='add-input'>
                    <h3>3. Provide specific product details.</h3>
                        <input type='text' value={this.state.item} name="item" placeholder='Name' onChange = {this.handleChange}/>
                        {/* <input type='text' value={this.state.stuff.model} name="model" placeholder='Model #' onChange = {this.handleChange}/>
                        <input type='text' value={this.state.stuff.sku} name="sku" placeholder='SKU #' onChange = {this.handleChange}/> */}
                </div>
                <div className='add-buttons'>
                        <a href='#page2'>Back</a>
                        <a href='#page4'>Next</a>
                    </div>
                </div>
                <div className='add-page' id='page4'>
                <div className='add-input'>
                    <h3>4. List 5 unique features of your product.</h3>
                        {/* <input type='text' value={this.state.stuff.features1} name="features1" placeholder='1.' onChange = {this.handleChange}/>
                        <input type='text' value={this.state.stuff.features2} name="features2" placeholder='2.' onChange = {this.handleChange}/>
                        <input type='text' value={this.state.stuff.features3} name="features3" placeholder='3.' onChange = {this.handleChange}/>
                        <input type='text' value={this.state.stuff.features4} name="features4" placeholder='4.' onChange = {this.handleChange}/>
                        <input type='text' value={this.state.stuff.features5} name="features5" placeholder='5.' onChange = {this.handleChange}/>  */}
                </div>
                <div className='add-buttons'>
                        <a href='#page3'>Back</a>
                        <a href='#page5'>Next</a>
                    </div>
                </div>
                <div className='add-page' id='page5'>
                <div className='add-input'>
                    <h3>5. Upload Images of Product</h3>
                    {/* <input type="file" name="pic" accept='image/*' /> */}
                   <h3>Upload warranty details of your product.</h3> 
                    {/* <input type="file" name="pic" accept='image/*' /> */}
                </div>
                <div className='add-buttons'>
                        <a href='#page4'>Back</a>
                        <a href='#page6'>Next</a>
                    </div>
                </div>
                <div className='add-page' id='page6'>
                <div className='add-input'>
                    <h3>6. Pricing Information -</h3>
                    <br/>
                    <p>How much will it cost per day to rent your stuff?</p>
                    <input type='text' value={this.state.price} name="price" placeholder='$' onChange = {this.handleChange}/>
                </div>
                <div className='add-buttons'>
                        <a href='#page5'>Back</a>
                        <a href='#page7'>Next</a>
                    </div>
                </div>
                <div className='add-page' id='page7'>
                <div className='add-input'>
                    7. Any additional information about your product?
                    <textarea rows="10" cols="30" value={this.state.description} name="description" placeholder='' onChange = {this.handleChange}/>
                </div>
                <div className='add-buttons'>
                        <a href='#page6'>Back</a>
                        <button type ="submit" onClick={this.handleSubmit}>Add Item</button>
                    </div>
                </div>
            </form>
          )
      }
}

const mapStateToProps = state => {
    return {error:state.error}
   }
  
  export default connect(mapStateToProps,{addItem, fetchItem}) (AddItemForm);