import React from 'react';
import { Content } from './Styles/Style';
import { FirstName } from '../App';

const HomeD = () => {
  return (
    <>
      <Content>
        <FirstName.Consumer>
         {(fname) => {
           return <h1>Customer name is { fname }</h1>
           }
         }
        </FirstName.Consumer>
      </Content>
    </>
  )
}

export default HomeD;
