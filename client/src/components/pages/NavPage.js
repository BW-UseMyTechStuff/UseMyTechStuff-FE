import React, { useState } from "react";
import styled from 'styled-components';
import Links from '../links/Links.js';
import { navData } from '../../data.js'; 

const NavDiv = styled.div`
    padding-top: 1.5rem;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StyledSection = styled.section`
  max-width: 500px;
`;

const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  width: 75px;
  height: 75px;
`;

const StyledHeader = styled.h3`
  background-color: #086A27;
  padding: .5rem;
  color: #F6F6F8;
  text-align: center;
  margin: 1rem auto;
  width: 85%;
`;

export default function NavPage() {
  const [naviLinks] = useState(navData);
  return (
    <StyledSection className="nav-page">
      <div className="nav-top">
      <StyledImg
        className="logo-image"
        src='../../../img/logo-icon.png'
        alt="logo"
      />
        <StyledHeader>What would you like to do?</StyledHeader>
      </div>
      <NavDiv className="nav-box">

      {naviLinks.map(links => <Links key={links.id} href={links.href} text={links.text} src={links.src} alt={links.alt} flex={links.flex} />)}

      </NavDiv>

    </StyledSection>
  );
}