import React, { createContext } from 'react'
import MainA from './MainA';

const FirstName = createContext();
const LastName = createContext();

const Main = () => {
  return (
    <>
    <FirstName.Provider value={"Jaya"}>
        <LastName.Provider value={"Kumari"}>
              <MainA />
        </LastName.Provider>
    </FirstName.Provider>
     
    </>
  )
}

export default Main;
export { FirstName, LastName };
