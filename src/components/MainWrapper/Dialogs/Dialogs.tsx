import {DialogItm} from "./DialogItm/DialogItm";
import {Message} from "./Message/Message";
import {StyledContainer} from "../MainWrapper";
import styled from "styled-components";
import {DialogsStateType} from "../../../types";
import {ChangeEvent, useState} from "react";

export const Dialogs = (props: DialogsStateType) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItm key={d.id} id={d.id} ava={d.ava} name={d.name} online={d.online}/>);
  let messageElements = props.state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>);
  let [msgText, setMsgText] = useState('');

  let onChangeMsg = (e:ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.currentTarget.value);
  }
  return (
    <StyledDialogs>
      <StyledContainer>
        <StyledDialogsWrap>
          <StyledDialogList>
            <StyledDialogsListHeading>Messages</StyledDialogsListHeading>
            <StyledDialogsFilter>
              <StyledDialogsFilterBtn>Active</StyledDialogsFilterBtn>
              <StyledDialogsFilterBtn>Newest</StyledDialogsFilterBtn>
              <StyledDialogsFilterBtn>Popular</StyledDialogsFilterBtn>
            </StyledDialogsFilter>
            <StyledDialogsMembersList>{dialogsElements}</StyledDialogsMembersList>
          </StyledDialogList>
          <StyledDialogsRightWrap>
            <StyledDialogsMsgs>{messageElements}</StyledDialogsMsgs>
            <StyledDialogsSendControls>
              <StyledMsgSend onChange={onChangeMsg}></StyledMsgSend>
              <StyledDialogsBtn>Send</StyledDialogsBtn>
            </StyledDialogsSendControls>
          </StyledDialogsRightWrap>
        </StyledDialogsWrap>
      </StyledContainer>
    </StyledDialogs>
  )
}

const StyledDialogs = styled.div`

`
const StyledDialogsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`
const StyledDialogList = styled.aside`
  max-width: 400px;
  min-width: 400px;
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  max-height: 100vh;
  overflow-y: scroll;
`
const StyledDialogsListHeading = styled.h2`
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
const StyledDialogsFilter = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 5px;
`
const StyledDialogsMembersList = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledDialogsMsgs = styled.div`
  width: 100%;
`
const StyledDialogsFilterBtn = styled.div`
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
const StyledMsgSend = styled.textarea`
  width: 100%;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 7px;
  min-height: 35px;
  height: 35px;
`
const StyledDialogsRightWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 30px;
  justify-content: space-between;
`
const StyledDialogsSendControls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`
const StyledDialogsBtn = styled.button`
  height: 50px;
  width: 70px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 7px;
`
