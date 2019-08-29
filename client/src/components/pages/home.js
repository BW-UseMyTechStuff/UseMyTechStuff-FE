import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Links from '../links/Links.js';
import { homeData, footerHome } from '../../data.js';
import '../../styles/home.css';

const NavDiv = styled.div`
    padding-top: 1.5rem;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StyledHeader = styled.h3`
    color: #454654;
    margin: 0 auto;
    width: 75%;
    padding-bottom: 5%;
`;


/*
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.handleChange = this.handleChange.bind(this) ;
        // {
        //     filtered: []
        // }
    }


componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }


handleChange(e) {
    // Variable to hold the original version of the list
let currentList = [];
    // Variable to hold the filtered list before putting into state
let newList = [];

    // If the search bar isn't empty
if (e.target.value !== "") {
        // Assign the original list to currentList
  currentList = this.props.items;

        // Use .filter() to determine which items should be displayed
        // based on the search terms
  newList = currentList.filter(item => {
            // change current item to lowercase
    const lc = item.toLowerCase();
            // change search term to lowercase
    const filter = e.target.value.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues with capitalization in search terms and search content
    return lc.includes(filter);
  });
} else {
        // If the search bar is empty, set newList to original task list
  newList = this.props.items;
}
    // Set the filtered state based on what our rules added to newList
this.setState({
  filtered: newList
});
}

};
*/

function Home (props) {
    const [homeLinks] = useState(homeData);
    const [footerLinks] =useState(footerHome);
    return (
        <div className='home-container'>
            <div className='nav-container'>
            <h4>umts</h4>
            <div>
               <NavLink to='/login'><button>Sign In</button></NavLink>
               <NavLink to='/registration'><button>Join</button></NavLink>
               </div>
            </div>

            <div className='top-content'>
                
                <div className='top'>
                    <h3>USE MY TECH STUFF</h3>
                    <input type="text" className="input" onChange={(event) => props.search(event.target.value, props.data)} placeholder="Search..." />
                    <h3>What can we help you find?</h3>
                </div>
            </div>
            <NavDiv className="home-nav-box">

            {homeLinks.map(links => <Links key={links.id} text={links.text} href={links.href} src={links.src} alt={links.alt} flex={links.flex} />)}

            </NavDiv>
            <NavDiv className="footer-nav-box">
            <StyledHeader>Would you like to list a tech product for rent?</StyledHeader>
            {footerLinks.map(links => <Links key={links.id} text={links.text} href={links.href} src={links.src} alt={links.alt} flex={links.flex}/>)}
            </NavDiv>
        </div>
    )
}

export default Home