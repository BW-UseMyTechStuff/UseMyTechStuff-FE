import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Links from '../links/Links.js';
import LinksTwo from '../links/LinksTwo.js';
import { homeData, footerHome, middleHome } from '../../data.js';
import '../../styles/home.css';

function Home (props) {
    const [homeLinks] = useState(homeData);
    const [footerLinks] =useState(footerHome);
    const [middleLinks, setMiddleLinks] =useState(middleHome);
    return (
        <div className='home-container'>
            <div className='nav-container'>
              <div>
            <h4>umts</h4>
            </div>
            <div className="button-box">
               <NavLink to='/login'><button>Sign In</button></NavLink>
               <NavLink to='/registration'><button>Join</button></NavLink>
               </div>
            </div>

            <div className='top-content'>
                
                <div className='top'>
                    <h3>use my tech stuff</h3>
                    <input type="text" className="input" onChange={(event) => props.search(event.target.value, props.data)} placeholder="Search..." />
                    <h3>What can we help you find?</h3>
                </div>
            </div>
            <div className="nav-box">
              {homeLinks.map(links => <Links key={links.id} text={links.text} href={links.href} src={links.src} alt={links.alt} flex={links.flex} />)}
            </div>
            {<div className="nav-box">
              <h3>Most rented products</h3>
              {middleLinks.map(links => <LinksTwo key={links.id} price={links.price} title={links.title} href={links.href} src={links.src} alt={links.alt} flex={links.flex} />)}
            </div>}
            <div className="nav-box">
            <h3>Would you like to list a tech product for rent?</h3>
              {footerLinks.map(links => <Links key={links.id} text={links.text} href={links.href} src={links.src} alt={links.alt} flex={links.flex}/>)}
            </div>
        </div>
    )
}

export default Home