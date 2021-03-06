
import React, { createContext } from 'react'
import HomeA from './HomeA';

const FirstName = createContext();
const LastName = createContext();

const ContextApi = () => {
  return (
    <>
    <FirstName.Provider value={"Raju"}>
        <LastName.Provider value={"Kumar"}>
             <HomeA />
        </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}
export default ContextApi;
export { FirstName, LastName };
