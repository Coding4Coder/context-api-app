
import './App.scss';
import ContextApi from './Components/ContextApi';
import Header from './Components/Header';
import {MainContainer } from "./Components/Styles/Style";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './Components/UseContextHook/Main';


function App() {
  return (
    <>
    <BrowserRouter>
     <Header />

     <MainContainer>
       <Routes>
         <Route path="/" element={ <ContextApi /> } />
         <Route path="/contaxt-api/" element={ <ContextApi /> } />
         <Route path="/use-context-hook/" element={ <Main /> } />
      </Routes>
     </MainContainer>
     </BrowserRouter>
    </>
  );
}

export default App;

