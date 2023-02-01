import Icofont from "react-icofont";
import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const SidebarMenu = () => {
  return (
    <SidebarMenuToggle>
      <NavEl to="/profile" activeClassName="active">
        <Icofont icon="users-alt-4"/>
      </NavEl>
      <NavEl to="/dialogs" activeClassName="active">
        <Icofont icon="speech-comments"/>
      </NavEl>
      <NavEl to="/blog" activeClassName="active">
        <Icofont icon="newspaper"/>
      </NavEl>
      <NavEl to="/music" activeClassName="active">
        <Icofont icon="sound-wave-alt"/>
      </NavEl>
      <NavEl to="/settings" activeClassName="active">
        <Icofont icon="settings-alt"/>
      </NavEl>
    </SidebarMenuToggle>
  )
}

const SidebarMenuToggle = styled.nav`
  height: 100%;
  background-color: #fff;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`
const NavEl = styled(NavLink)`
  margin-bottom: 18px;
  font-size: 24px;
  color: #8793a3;
  display: flex;
  align-items: center;
  padding: 10px 0 10px 32px;
  &.${props => props.activeClassName} {
    color: red;
  }
  i {
    margin-right: 12px;
    transition: .3s ease all;
  }
  &:hover i,
  &.active i {
    transition: .3s ease all;
    color: #2d5be3;
  }
`