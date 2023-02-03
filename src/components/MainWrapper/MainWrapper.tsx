import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Blog} from "./Blog/Blog";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import React from "react";
import styled from "styled-components";
import {AppPropsType} from "../../types";



export const MainWrapper = (props:AppPropsType) => {
  return (
    <StyledAppWrapperMain>
      <Route path='/profile' render={() => <Profile />}/>
      <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
      <Route path='/blog' render={() => <Blog posts={props.posts} />}/>
      <Route path='/music' render={() => <Music />}/>
      <Route path='/settings' render={() => <Settings />}/>
    </StyledAppWrapperMain>
  )
}

const StyledAppWrapperMain = styled.div`
  padding-left: 90px;
  padding-top: 30px;
  background: #eff4fb;
  min-height: 100vh;
`

export const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;
`