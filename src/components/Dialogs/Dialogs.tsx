import globStl from './../global.module.css';
import dStl from './dialogs.module.css';

export const Dialogs = () => {
  return (
    <div className={dStl.dialogs}>
      <div className={globStl.container}>
        <div className={dStl.dialogsWrap}>
          <aside className={dStl.dialogsList}>
<h2 className={dStl.dialogsListHeading}>Messages</h2>
          </aside>
          <div className={dStl.dialogsMsgs}>

          </div>
        </div>
      </div>

    </div>
  )
}