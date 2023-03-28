import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {MainWrapper} from "./components/MainWrapper/MainWrapper";
import {AppStateType} from "./types";
import {StoreType} from "./redux/state";
//import {changeText} from "./redux/state";

type PropsType = {
  store: StoreType
}

// state={state}
// addNewPost={addNewPost}
// addNewMessage={addNewMessage}

const App:FC<PropsType> = (props) => {
  const state = props.store.getState()

  return (
      <main>
        <Header/>
        <MainWrapper
          state={state}
          addNewPost={props.store.addNewPost.bind(props.store)}
          messageForNewPost={state.blogPage.messageForNewPost}
          changeText={props.store.changeText.bind(props.store)}
          addNewMessage={props.store.addNewMessage.bind(props.store)}
          dispatch={props.store.dispatch.bind(props.store)}
        />
      </main>
  );
}


export default App;