import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Links = (props) => {
  const StyledDiv = styled.div`
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: ${props.flex};
    margin-bottom: 2%;
  `;

  const StyledImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 75px;
    height: 75px;
  `;

  const StyledPara = styled.p`
    color: #E95A00;
    text-align: center;
  `;

  return (
        <StyledDiv className="nav-options">
          <NavLink to={props.href}><StyledImg
            src={props.src}
            alt={props.alt}
          /></NavLink>
          <StyledPara>{props.text}</StyledPara>
        </StyledDiv>
  );
};
export default Links;