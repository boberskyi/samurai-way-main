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

              <NavLink to="/dialogs/1" className={dStl.membersListItm + ' ' + dStl.active}>
                <span className={dStl.memberAvatar}>
                  <img src={ava1} alt="Profile photo"/>
                </span>
                <span className={dStl.memberDesript}>
                  <span className={dStl.descriptHeading}>Rebeca Powel</span>
                  <span className={dStl.descriptLastVisit}>
                    3 days ago
                  </span>
                </span>
              </NavLink>

              <NavLink to="/dialogs/2" className={dStl.membersListItm}>
                <span className={dStl.memberAvatar}>
                  <img src={ava2} alt="Profile photo"/>
                </span>
                <span className={dStl.memberDesript}>
                  <span className={dStl.descriptHeading}>Andre Dubus</span>
                  <span className={dStl.descriptLastVisit}>
                    8 days ago
                  </span>
                </span>
              </NavLink>

              <NavLink to="/dialogs/3" className={dStl.membersListItm}>
                <span className={dStl.memberAvatar}>
                  <img src={ava3} alt="Profile photo"/>
                </span>
                <span className={dStl.memberDesript}>
                  <span className={dStl.descriptHeading}>John Caius</span>
                  <span className={dStl.descriptLastVisit}>
                    1 week ago
                  </span>
                </span>
              </NavLink>

              <NavLink to="/dialogs/4" className={dStl.membersListItm}>
                <span className={dStl.memberAvatar}>
                  <img src={ava4} alt="Profile photo"/>
                </span>
                <span className={dStl.memberDesript}>
                  <span className={dStl.descriptHeading}>Wynonna Judd</span>
                  <span className={dStl.descriptLastVisit}>
                    1 month ago
                  </span>
                </span>
              </NavLink>

              <NavLink to="/dialogs/5" className={dStl.membersListItm}>
                <span className={dStl.memberAvatar}>
                  <img src={ava5} alt="Profile photo"/>
                </span>
                <span className={dStl.memberDesript}>
                  <span className={dStl.descriptHeading}>Keir Dullea</span>
                  <span className={dStl.descriptLastVisit}>
                    1 month ago
                  </span>
                </span>
              </NavLink>

              <NavLink to="/dialogs/6" className={dStl.membersListItm}>
                <span className={dStl.memberAvatar}>
                  <img src={ava6} alt="Profile photo"/>
                </span>
                <span className={dStl.memberDesript}>
                  <span className={dStl.descriptHeading}>Cecelia Cichan</span>
                  <span className={dStl.descriptLastVisit}>
                    5 months ago
                  </span>
                </span>
              </NavLink>

              <NavLink to="/dialogs/7" className={dStl.membersListItm}>
                <span className={dStl.memberAvatar}>
                  <img src={ava7} alt="Profile photo"/>
                </span>
                <span className={dStl.memberDesript}>
                  <span className={dStl.descriptHeading}>Ron Faucheux</span>
                  <span className={dStl.descriptLastVisit}>
                    10 months ago
                  </span>
                </span>
              </NavLink>


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