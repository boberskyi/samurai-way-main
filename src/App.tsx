import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {AppStateType} from "./types";



const App:React.FC<AppStateType> = ({state}) => {
  return (
    <BrowserRouter>
      <main>
        <Header/>
        <MainWrapper state={state}/>
      </main>
    </BrowserRouter>
  );
}


export default App;