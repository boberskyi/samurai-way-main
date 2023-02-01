import React from "react";
import styled from "styled-components";
import {BurgerBtn} from "./BurgerBtn/BurgerBtn";
import {SidebarMenu} from "./SidebarMenu/SidebarMenu";

export const Header = () => {
  return (

      <HeaderB>
        <HeaderSmall>
          <BurgerBtn />
          <SidebarMenu />
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

const HeaderBig = styled.div`
  display: flex;
`