import React from "react";
import {NavLink} from "react-router-dom";
import Icofont from "react-icofont";
import styled from "styled-components";

export const Header = () => {
  return (

      <HeaderB>
        <HeaderSmall>

          <SidebarToggle>
            <ToggleBtn>
              <span></span>
              <span></span>
              <span></span>
            </ToggleBtn>
          </SidebarToggle>

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
        </HeaderSmall>

        <HeaderBig></HeaderBig>
      </HeaderB>
  )
}


const HeaderB = styled.header`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
`

const HeaderSmall = styled.div`
  width: 90px;
  transition-delay: .3s;
  position: absolute;
  height: 100vh;
  transition: transform .5s cubic-bezier(.55, 0, .1, 1);
`
const SidebarToggle = styled.div`
  background-color: #224ed3;
  text-align: center;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
`
const ToggleBtn = styled.div`
  width: 33px;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  & span {
    position: relative;
    display: block;
    height: 3px;
    width: 22px;
    background-color: #fff;
    border-radius: 2px;
    margin-bottom: 8px;
    margin-left: auto;
    transition: all .3s ease-in-out;

    &:before {
      content: "";
      width: 8px;
      height: 3px;
      background-color: #34b7f1;
      border-radius: 2px;
      position: absolute;
      top: 0;
      left: -11px;
    }

    &:nth-child(even) {
      margin-left: 0;

      &:before {
        left: auto;
        right: -11px;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:hover span {
    background-color: #34b7f1;
  }
`
const SidebarMenuToggle = styled.nav`
  height: 100%;
  background-color: #fff;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`
const HeaderBig = styled.div`
  display: flex;
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
`;

