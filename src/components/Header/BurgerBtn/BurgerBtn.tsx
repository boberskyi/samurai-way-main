import React from "react";
import styled from "styled-components";

export const BurgerBtn = () => {
  return (
    <SidebarToggle>
      <ToggleBtn>
        <span></span>
        <span></span>
        <span></span>
      </ToggleBtn>
    </SidebarToggle>
  )
}

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