import React, { useContext } from 'react';
import { FirstName, LastName } from '../ContextApi';
import { Content } from '../Styles/Style';

const MainC = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <Content>
         <h1> Her name is {fname} {lname} </h1>
      </Content>
    </>
  )
}

export default MainC;
