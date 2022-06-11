import React, { createContext } from 'react';
import HomeA from './HomeA';

const FirstName = createContext();
const LastName = createContext();

const ContextApi = () => {
  return (
    <>
    <FirstName.Provider value={"Munna"}>
        <LastName.Provider value={"Bhai MBSS"}>
             <HomeA />
        </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}

export default ContextApi;
export { FirstName, LastName };
