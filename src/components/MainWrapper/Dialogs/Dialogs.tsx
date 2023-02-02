import ava1 from './ava1.jpg';
import ava2 from './ava2.jpg';
import ava3 from './ava3.jpg';
import ava4 from './ava4.jpg';
import ava5 from './ava5.jpg';
import ava6 from './ava6.jpg';
import ava7 from './ava7.jpg';
import {DialogItm} from "./DialogItm/DialogItm";
import {Message} from "./Message/Message";
import {Container} from "../MainWrapper";
import styled from "styled-components";

export type DialogItmPropsType = {
  id: number,
  ava: string,
  name: string,
  online: string
}

export type MyMessagePropType = {
  msg: string
}

export type DialogsDataPropsType = {
  data: DialogPropsType[]
}

export type DialogPropsType = {
  id: number,
  ava: string,
  name: string,
  online: string
}

export const Dialogs = (props: DialogsDataPropsType) => {

  let dialogs = [
    {id: 1, ava: ava1, name: 'Rebeca Powel', online: '3 days ago'},
    {id: 2, ava: ava2, name: 'Andre Dubus', online: '8 days ago'},
    {id: 3, ava: ava3, name: 'John Caius', online: '1 week ago'},
    {id: 4, ava: ava4, name: 'Wynonna Judd', online: '1 month ago'},
    {id: 5, ava: ava5, name: 'Keir Dullea', online: '1 month ago'},
    {id: 6, ava: ava6, name: 'Cecelia Cichan', online: '5 months ago'},
    {id: 7, ava: ava7, name: 'Ron Faucheux', online: '10 months ago'}
  ]

  let messages = [
    {id: 1, message: 'My message 1'},
    {id: 2, message: 'My message 2'},
    {id: 3, message: 'My message 3'}
  ]

  let dialogsElements = dialogs.map(d => <DialogItm key={d.id} id={d.id} ava={d.ava} name={d.name} online={d.online}/>);
  let messageElements = messages.map(m => <Message key={m.id} msg={m.message}/>);

  return (
    <DialogsS>
      <Container>
        <DialogsWrapS>
          <DialogListS>
            <DialogsListHeadingS></DialogsListHeadingS>
            <DialogsFilterS>
              <DialogsFilterBtnS>Active</DialogsFilterBtnS>
              <DialogsFilterBtnS>Newest</DialogsFilterBtnS>
              <DialogsFilterBtnS>Popular</DialogsFilterBtnS>
            </DialogsFilterS>
            <DialogsMembersListS>{dialogsElements}</DialogsMembersListS>
          </DialogListS>
          <DialogsMsgsS>{messageElements}</DialogsMsgsS>
        </DialogsWrapS>
      </Container>
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