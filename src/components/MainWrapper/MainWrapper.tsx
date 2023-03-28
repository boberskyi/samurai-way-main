import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Blog} from "./Blog/Blog";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import React from "react";
import styled from "styled-components";
import {MainWrapperType} from "../../types";



export const MainWrapper:React.FC<MainWrapperType> = (props) => {
  return (
    <StyledAppWrapperMain>
      <Route path='/profile'
             render={() => <Profile />}
      />
      <Route path='/dialogs'
             render={() => <Dialogs state={props.state.dialogsPage}
                                    addNewMessage={props.addNewMessage}
                                    dispatch={props.dispatch}
             />}
      />
      <Route path='/blog'
             render={() => <Blog
               posts={props.state.blogPage.posts}
                addNewPost={props.addNewPost}
                messageForNewPost={props.messageForNewPost}
               changeText={props.changeText}
               dispatch={props.dispatch}
             />}
      />
      <Route path='/music'
             render={() => <Music />}
      />
      <Route path='/settings'
             render={() => <Settings />}
      />
    </StyledAppWrapperMain>
  )
}

const StyledAppWrapperMain = styled.div`
  padding-left: 90px;
  padding-top: 30px;
  padding-bottom: 30px;
  background: #eff4fb;
  min-height: 100vh;
`

export const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;
`