import globStl from './../global.module.css';
import dStl from './dialogs.module.css';
import ava1 from './ava1.jpg';
import ava2 from './ava2.jpg';
import ava3 from './ava3.jpg';
import ava4 from './ava4.jpg';
import ava5 from './ava5.jpg';
import ava6 from './ava6.jpg';
import ava7 from './ava7.jpg';

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

              <div className={dStl.membersListItm + ' ' + dStl.active}>
                <div className={dStl.memberAvatar}>
                  <img src={ava1} alt="Profile photo"/>
                </div>
                <div className={dStl.memberDesript}>
                  <h3 className={dStl.descriptHeading}>Rebeca Powel</h3>
                  <p className={dStl.descriptLastVisit}>
                    3 days ago
                  </p>
                </div>
              </div>

              <div className={dStl.membersListItm}>
                <div className={dStl.memberAvatar}>
                  <img src={ava2} alt="Profile photo"/>
                </div>
                <div className={dStl.memberDesript}>
                  <h3 className={dStl.descriptHeading}>Andre Dubus</h3>
                  <p className={dStl.descriptLastVisit}>
                    8 days ago
                  </p>
                </div>
              </div>

              <div className={dStl.membersListItm}>
                <div className={dStl.memberAvatar}>
                  <img src={ava3} alt="Profile photo"/>
                </div>
                <div className={dStl.memberDesript}>
                  <h3 className={dStl.descriptHeading}>John Caius</h3>
                  <p className={dStl.descriptLastVisit}>
                    1 week ago
                  </p>
                </div>
              </div>

              <div className={dStl.membersListItm}>
                <div className={dStl.memberAvatar}>
                  <img src={ava4} alt="Profile photo"/>
                </div>
                <div className={dStl.memberDesript}>
                  <h3 className={dStl.descriptHeading}>Wynonna Judd</h3>
                  <p className={dStl.descriptLastVisit}>
                    1 month ago
                  </p>
                </div>
              </div>

              <div className={dStl.membersListItm}>
                <div className={dStl.memberAvatar}>
                  <img src={ava5} alt="Profile photo"/>
                </div>
                <div className={dStl.memberDesript}>
                  <h3 className={dStl.descriptHeading}>Keir Dullea</h3>
                  <p className={dStl.descriptLastVisit}>
                    1 month ago
                  </p>
                </div>
              </div>

              <div className={dStl.membersListItm}>
                <div className={dStl.memberAvatar}>
                  <img src={ava6} alt="Profile photo"/>
                </div>
                <div className={dStl.memberDesript}>
                  <h3 className={dStl.descriptHeading}>Cecelia Cichan</h3>
                  <p className={dStl.descriptLastVisit}>
                    5 months ago
                  </p>
                </div>
              </div>

              <div className={dStl.membersListItm}>
                <div className={dStl.memberAvatar}>
                  <img src={ava7} alt="Profile photo"/>
                </div>
                <div className={dStl.memberDesript}>
                  <h3 className={dStl.descriptHeading}>Ron Faucheux</h3>
                  <p className={dStl.descriptLastVisit}>
                    10 months ago
                  </p>
                </div>
              </div>


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