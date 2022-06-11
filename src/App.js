
import './App.scss';
import ContextApi from './Components/ContextApi';
import Header from './Components/Header';
import {MainContainer } from "./Components/Styles/Style";


function App() {
  return (
    <>
     <Header />

     <MainContainer>
         <ContextApi />
     </MainContainer>
    </>
  );
}

export default App;

