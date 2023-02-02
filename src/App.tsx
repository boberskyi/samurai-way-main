import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {AppPropsType} from "./types";



const App = (props:AppPropsType) => {
  return (
    <BrowserRouter>
      <main>
        <Header/>
        <MainWrapper posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>
      </main>
    </BrowserRouter>
  );
}


export default App;