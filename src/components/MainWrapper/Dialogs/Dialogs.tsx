import {DialogItm} from "./DialogItm/DialogItm";
import {Message} from "./Message/Message";
import {StyledContainer} from "../MainWrapper";
import styled from "styled-components";
import {DialogsStateType} from "../../../types";

export const Dialogs = (props: DialogsStateType) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItm key={d.id} id={d.id} ava={d.ava} name={d.name} online={d.online}/>);
  let messageElements = props.state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>);

  return (
    <DialogsS>
      <StyledContainer>
        <DialogsWrapS>
          <DialogListS>
            <DialogsListHeadingS>Messages</DialogsListHeadingS>
            <DialogsFilterS>
              <DialogsFilterBtnS>Active</DialogsFilterBtnS>
              <DialogsFilterBtnS>Newest</DialogsFilterBtnS>
              <DialogsFilterBtnS>Popular</DialogsFilterBtnS>
            </DialogsFilterS>
            <DialogsMembersListS>{dialogsElements}</DialogsMembersListS>
          </DialogListS>
          <DialogsMsgsS>{messageElements}</DialogsMsgsS>
        </DialogsWrapS>
      </StyledContainer>
    </DialogsS>
  )
}

const DialogsS = styled.div`
  
`
const DialogsWrapS = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`
const DialogListS = styled.aside`
  max-width: 400px;
  min-width: 400px;
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  max-height: 100vh;
  overflow-y: scroll;
`
const DialogsListHeadingS = styled.h2`
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  position: relative;
  &:before {
    content: "";
    height: 3px;
    width: 8px;
    background-color: #2d5be3;
    border-radius: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &:after {
      content: "";
      height: 3px;
      width: 18px;
      background-color: #2d5be3;
      border-radius: 4px;
      position: absolute;
      left: 10px;
      bottom: 0;
  }
`
const DialogsFilterS = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 5px;
`
const DialogsMembersListS = styled.div`
  display: flex;
  flex-direction: column;
`
const DialogsMsgsS = styled.div`
  width: 100%;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 30px;
`
const DialogsFilterBtnS = styled.div`
  font-size: 13px;
  padding: 5px 13px;
  font-weight: 500;
  color: #646464;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  background-color: transparent;
  cursor: pointer;
  transition: all .3s ease 0s;

  &:hover,
  &.active {
    border-color: #34b7f1;
    background-color: #34b7f1;
    color: #fff;
  }
`