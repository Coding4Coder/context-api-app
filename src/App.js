
import { createContext } from 'react';
import './App.scss';
import HomeA from './Components/HomeA';
import { TopHeader, Logo, TopNavBar, MainContainer } from "./Components/Styles/Style";

const FirstName = createContext();

function App() {
  return (
    <>
     <TopHeader>
      <Logo> Logo </Logo>
      <TopNavBar>Home | About | Contact </TopNavBar>
     </TopHeader>

     <MainContainer>
       <FirstName.Provider value={"Kabir"}>
         <HomeA />
       </FirstName.Provider>
     </MainContainer>
    </>
  );
}

export default App;
export { FirstName };
