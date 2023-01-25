import globStl from './../global.module.css';
import sProf from './profile.module.css';
import avatar from './ava.jpg';
import Icofont from "react-icofont";
import React from "react";
import {Likes} from "../Header/Likes/Likes";

export const Profile = () => {
  return (
    <div className={sProf.main}>
      <div className={globStl.container}>
        <div className={sProf.header}>
          <div className={sProf.img}>
            <img src={avatar} alt="Avatar"/>
          </div>
          <div className={sProf.stat}>
            <h2 className={sProf.name}>Name Surname</h2>
            <p className={sProf.subtitle}>Lviv, Ukraine</p>
            <div className={sProf.socialMeta}>

              <div className={sProf.social}>
                <a className={sProf.link} href="#" target="_blank" style={{backgroundColor: "#365493"}}>
                  <Icofont icon="facebook"/>
                </a>
                <a className={sProf.link} href="#" target="_blank" style={{backgroundColor: "#38b8ff"}}>
                  <Icofont icon="twitter"/>
                </a>
                <a className={sProf.link} href="#" target="_blank" style={{backgroundColor: "#ec407a"}}>
                  <Icofont icon="dribble"/>
                </a>
                <a className={sProf.link} href="#" target="_blank" style={{backgroundColor: "#2962ff"}}>
                  <Icofont icon="behance"/>
                </a>
                <a className={sProf.link} href="#" target="_blank" style={{backgroundColor: "red"}}>
                  <Icofont icon="brand-youtube"/>
                </a>
              </div>
              <div className={sProf.meta}>
                <div className={sProf.metaInfo}>
                  Posts
                  <span> 4</span>
                </div>
                <div className={sProf.metaInfo}>
                  Comments:
                  <span> 12</span>
                </div>
                <div className={sProf.metaInfo}>
                  Views:
                  <span> 12 302</span>
                </div>
              </div>

            </div>

          </div>
        </div>
        <Likes />
      </div>
    </div>
  )
}