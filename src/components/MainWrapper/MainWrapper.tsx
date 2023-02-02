import {Route} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";
import {Blog} from "../Blog/Blog";
import {Music} from "../Music/Music";
import {Settings} from "../Settings/Settings";
import React from "react";
import styled from "styled-components";

export const MainWrapper = () => {
  return (
    <AppWrapperMain>
      <Route path='/profile' component={Profile}/>
      <Route path='/dialogs' component={Dialogs}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings}/>
    </AppWrapperMain>
  )
}

const AppWrapperMain = styled.div`
  padding-left: 90px;
  padding-top: 30px;
  background: #eff4fb;
  min-height: 100vh;
`