import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header/>
        <MainWrapper />
      </main>
    </BrowserRouter>
  );
}


export default App;