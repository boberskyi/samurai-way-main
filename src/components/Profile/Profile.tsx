import globStl from './../global.module.css';
import sProf from './profile.module.css';
import avatar from './ava.jpg';

export const Profile = () => {
  return (
    <div className={sProf.main}>
      <div className={globStl.container}>
        <div className={sProf.header}>
<div className={sProf.img}>
  <img src={avatar} alt="Avatar"/>
</div>
        </div>
      </div>
    </div>
  )
}