import React from "react";
import styled from "styled-components";
import {BurgerBtn} from "./BurgerBtn/BurgerBtn";
import {SidebarMenu} from "./SidebarMenu/SidebarMenu";

export const Header = () => {
  return (

      <StyledHeader>
        <StyledHeaderSmall>
          <BurgerBtn />
          <SidebarMenu />
        </StyledHeaderSmall>
        <StyledHeaderBig></StyledHeaderBig>
      </StyledHeader>
  )
}


const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
`

const StyledHeaderSmall = styled.div`
  width: 90px;
  transition-delay: .3s;
  position: absolute;
  height: 100vh;
  transition: transform .5s cubic-bezier(.55, 0, .1, 1);
`

const StyledHeaderBig = styled.div`
  display: flex;
`