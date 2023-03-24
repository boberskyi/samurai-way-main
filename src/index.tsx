 import {addNewPost, addNewMessage, RootStateType, state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


const renderTree = () => {

  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage} />
    </BrowserRouter>, document.getElementById('root')
  );
}

renderTree();

 subscribe(renderTree)