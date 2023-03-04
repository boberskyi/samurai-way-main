import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {AppStateType} from "./types";
import {changeText} from "./redux/state";

const App:React.FC<AppStateType> = ({state, addNewPost}) => {
  return (
      <main>
        <Header/>
        <MainWrapper
          state={state}
          addNewPost={addNewPost}
          messageForNewPost={state.blogPage.messageForNewPost}
          changeText={changeText}
        />
      </main>
  );
}


export default App;