import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Blog} from "./components/Blog/Blog";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <BrowserRouter>
    <main>
      <Header />
      <div className={"app-wrapper-main"}>
        <Route path='/profile' component={Profile} />
        <Route path='/messages' component={Dialogs} />
        <Route path='/blog' component={Blog} />

        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>

    </main>
    </BrowserRouter>
  );
}








export default App;
