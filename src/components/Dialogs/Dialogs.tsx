import globStl from './../global.module.css';
import dStl from './dialogs.module.css';
import ava1 from './ava1.jpg';
import ava2 from './ava2.jpg';
import ava3 from './ava3.jpg';
import ava4 from './ava4.jpg';
import ava5 from './ava5.jpg';
import ava6 from './ava6.jpg';
import ava7 from './ava7.jpg';
import {NavLink} from "react-router-dom";

type DialogItmPropsType = {
  id: number,
  ava: string,
  name: string,
  online: string
}

const DialogItm = (props: DialogItmPropsType) => {
  let linkTo = `/dialogs/${props.id}`;
  return (
    <NavLink to={linkTo} className={dStl.membersListItm}>
                <span className={dStl.memberAvatar}>
                  <img src={props.ava} alt={props.name}/>
                </span>
      <span className={dStl.memberDesript}>
                  <span className={dStl.descriptHeading}>{props.name}</span>
                  <span className={dStl.descriptLastVisit}>{props.online}</span>
                </span>
    </NavLink>
  )
}

type MyMessagePropType = {
  msg: string
}

const MyMessage = (props: MyMessagePropType) => {
  return (
    <div className={dStl.dialogsMsgMy}>{props.msg}</div>
  )
}

type FriendsMessagePropsType = {
  msg: string
}

type DialogsDataPropsType = {
  data: DialogPropsType[]
}

type DialogPropsType = {
  id: number,
  ava: string,
  name: string,
  online: string
}

const FriendsMessage = (props: FriendsMessagePropsType) => {
  return (
    <div className={dStl.dialogsMsgYr}>{props.msg}</div>
  )
}

export const Dialogs = (props:DialogsDataPropsType) => {

  let dialogsData = [
    {id: 1, ava: ava1, name: '1Rebeca Powel', online: '3 days ago'},
    {id: 2, ava: ava2, name: 'Andre Dubus', online: '8 days ago'},
    {id: 3, ava: ava3, name: 'John Caius', online: '1 week ago'},
    {id: 4, ava: ava4, name: 'Wynonna Judd', online: '1 month ago'},
    {id: 5, ava: ava5, name: 'Keir Dullea', online: '1 month ago'},
    {id: 6, ava: ava6, name: 'Cecelia Cichan', online: '5 months ago'},
    {id: 7, ava: ava7, name: 'Ron Faucheux', online: '10 months ago'}
  ]

  let messagesData = [
    {id: 1, message: 'My message 1'},
    {id: 1, message: 'My message 2'},
    {id: 1, message: 'My message 3'}
  ]

  return (
    <div className={dStl.dialogs}>
      <div className={globStl.container}>
        <div className={dStl.dialogsWrap}>
          <aside className={dStl.dialogsList}>
            <h2 className={dStl.dialogsListHeading}>Messages</h2>

            <div className={dStl.dialogsFilter}>
              <button className={dStl.dialogsFilterBtn + ' ' + dStl.active}>Active</button>
              <button className={dStl.dialogsFilterBtn}>Newest</button>
              <button className={dStl.dialogsFilterBtn}>Popular</button>
            </div>

            <div className={dStl.membersList}>
              <DialogItm id={dialogsData[0].id} ava={dialogsData[0].ava} name={dialogsData[0].name} online={dialogsData[0].online} />
              <DialogItm id={dialogsData[1].id} ava={dialogsData[1].ava} name={dialogsData[1].name} online={dialogsData[1].online} />
              <DialogItm id={dialogsData[2].id} ava={dialogsData[2].ava} name={dialogsData[2].name} online={dialogsData[2].online} />
              <DialogItm id={dialogsData[3].id} ava={dialogsData[3].ava} name={dialogsData[3].name} online={dialogsData[3].online} />
              <DialogItm id={dialogsData[4].id} ava={dialogsData[4].ava} name={dialogsData[4].name} online={dialogsData[4].online} />
              <DialogItm id={dialogsData[5].id} ava={dialogsData[5].ava} name={dialogsData[5].name} online={dialogsData[5].online} />
              <DialogItm id={dialogsData[6].id} ava={dialogsData[6].ava} name={dialogsData[6].name} online={dialogsData[6].online} />
            </div>
          </aside>

          <div className={dStl.dialogsMsgs}>

            <MyMessage msg={messagesData[0].message}/>
            <MyMessage msg={messagesData[1].message}/>
            <MyMessage msg={messagesData[2].message}/>

          </div>
        </div>
      </div>

    </div>
  )
}