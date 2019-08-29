import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../store/actions';


class SearchForm extends Component {
  render(){

  return (
    <section className="searchbar">
      <form autoComplete="off">
        <input className='searchinput'
          onChange={(event) => this.props.search(event.target.value, this.props.data)}
          placeholder="Find a family recipe"
          name='search'
          type='text'
        />
        <button className='searchbutton' color="success" type="submit">Search</button>
      </form>
    </section>
  );
}
}

const mapStateToProps = (state) => ({
    data: state.data
})

export default connect(mapStateToProps, { search })(SearchForm);