import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {AppStateType} from "./types";



const App = (props:AppStateType) => {
  return (
    <BrowserRouter>
      <main>
        <Header/>
        <MainWrapper state={props.state}/>
      </main>
    </BrowserRouter>
  );
}


export default App;