import React, { createContext } from 'react';
import HomeA from './HomeA';

const FirstName = createContext();

const ContextApi = () => {
  return (
    <>
    <FirstName.Provider value={"Munna"}>
         <HomeA />
    </FirstName.Provider>
    </>
  )
}

export default ContextApi;
export { FirstName };
