import React from 'react';
import { TopHeader, Logo, TopNavBar } from './Styles/Style';
import {  NavLink } from "react-router-dom";

const Header = () => {
  return (

      <TopHeader>
        <Logo> Logo </Logo>
        <TopNavBar>
            <ul>
               <li><NavLink to="/contaxt-api/">Context API</NavLink></li> 
               <li><NavLink to="/use-context-hook/">UseContext</NavLink></li> 
            </ul>
        </TopNavBar>                    
     </TopHeader>
   
  )
}

export default Header;
