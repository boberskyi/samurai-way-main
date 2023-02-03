import Icofont from "react-icofont";
import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const SidebarMenu = () => {
  return (
    <StyledSidebarMenuToggle>
      <StyledNavEl to="/profile" activeClassName="active">
        <Icofont icon="users-alt-4"/>
      </StyledNavEl>
      <StyledNavEl to="/dialogs" activeClassName="active">
        <Icofont icon="speech-comments"/>
      </StyledNavEl>
      <StyledNavEl to="/blog" activeClassName="active">
        <Icofont icon="newspaper"/>
      </StyledNavEl>
      <StyledNavEl to="/music" activeClassName="active">
        <Icofont icon="sound-wave-alt"/>
      </StyledNavEl>
      <StyledNavEl to="/settings" activeClassName="active">
        <Icofont icon="settings-alt"/>
      </StyledNavEl>
    </StyledSidebarMenuToggle>
  )
}

const StyledSidebarMenuToggle = styled.nav`
  height: 100%;
  background-color: #fff;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`
const StyledNavEl = styled(NavLink)`
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