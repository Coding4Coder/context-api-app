import React from 'react';
import { Content } from './Styles/Style';
import { FirstName, LastName } from './ContextApi';

const HomeD = () => {
  return (
    <>
      <Content>

        <FirstName.Consumer>
           {
             (fname)=>{
               return (
                <LastName.Consumer>
                  {
                    (lname) => {
                        return (
                          <h1>My name is {fname} {lname}</h1>
                        )
                    }
                  }
                </LastName.Consumer> 
               )    
             }
          }
        </FirstName.Consumer>
        
      </Content>
    </>
  )
}

export default HomeD;
