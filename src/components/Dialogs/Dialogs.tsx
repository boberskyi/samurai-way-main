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

const DialogItm = (props:DialogItmPropsType) => {
  let linkTo = `/dialogs/${props.id}`;
  return (
    <NavLink to={linkTo} className={dStl.membersListItm}>
                <span className={dStl.memberAvatar}>
                  <img src={props.ava} alt={props.name} />
                </span>
      <span className={dStl.memberDesript}>
                  <span className={dStl.descriptHeading}>{props.name}</span>
                  <span className={dStl.descriptLastVisit}>{props.online}</span>
                </span>
    </NavLink>
  )
}

export const Dialogs = () => {
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
              <DialogItm id={1} ava={ava1} name="Rebeca Powel" online="3 days ago" />
              <DialogItm id={2} ava={ava2} name="Andre Dubus" online="8 days ago" />
              <DialogItm id={3} ava={ava3} name="John Caius" online="1 week ago" />
              <DialogItm id={4} ava={ava4} name="Wynonna Judd" online="1 month ago" />
              <DialogItm id={5} ava={ava5} name="Keir Dullea" online="1 month ago" />
              <DialogItm id={6} ava={ava6} name="Cecelia Cichan" online="5 months ago" />
              <DialogItm id={7} ava={ava7} name="Ron Faucheux" online="10 months ago" />
            </div>
          </aside>

          <div className={dStl.dialogsMsgs}>

            <div className={dStl.dialogsMsgMy}>
              My message
            </div>

            <div className={dStl.dialogsMsgYr}>
              Friends message
            </div>
            <div className={dStl.dialogsMsgYr}>
              Friends message
            </div>
            <div className={dStl.dialogsMsgMy}>
              My message
            </div>
            <div className={dStl.dialogsMsgMy}>
              My message
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}