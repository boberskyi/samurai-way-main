import dStl from './dialogs.module.css';
import ava1 from './ava1.jpg';
import ava2 from './ava2.jpg';
import ava3 from './ava3.jpg';
import ava4 from './ava4.jpg';
import ava5 from './ava5.jpg';
import ava6 from './ava6.jpg';
import ava7 from './ava7.jpg';
import {DialogItm} from "./DialogItm/DialogItm";
import {Message} from "./Message/Message";

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

export const Dialogs = (props:DialogsDataPropsType) => {

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

  let dialogsElements = dialogs.map(d => <DialogItm key={d.id} id={d.id} ava={d.ava} name={d.name} online={d.online} />);
  let messageElements = messages.map(m => <Message key={m.id} msg={m.message}/>);

  return (
    <div className={dStl.dialogs}>
      <div className={"container"}>
        <div className={dStl.dialogsWrap}>
          <aside className={dStl.dialogsList}>
            <h2 className={dStl.dialogsListHeading}>Messages</h2>

            <div className={dStl.dialogsFilter}>
              <button className={dStl.dialogsFilterBtn + ' ' + dStl.active}>Active</button>
              <button className={dStl.dialogsFilterBtn}>Newest</button>
              <button className={dStl.dialogsFilterBtn}>Popular</button>
            </div>

            <div className={dStl.membersList}>
              {dialogsElements}
            </div>
          </aside>

          <div className={dStl.dialogsMsgs}>
            {messageElements}
          </div>
        </div>
      </div>

    </div>
  )
}