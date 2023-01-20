import React from "react";
import headerStl from './header.module.css';
import {NavLink} from "react-router-dom";
import Icofont from "react-icofont";

export const Header = () => {
  return (
    <header className={headerStl.header}>

    <div className={headerStl.hSmall}>

      <div className={headerStl.sidebarToggle}>
        <button className={headerStl.toggleBtn}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>


      <nav className={headerStl.sidebarMenuToggle}>
          <NavLink className={headerStl.hSmallItm}
                   activeClassName={headerStl.active}
                   to="/profile">
            <Icofont icon="users-alt-4"/>
          </NavLink>
          <NavLink className={headerStl.hSmallItm}
                   activeClassName={headerStl.active}
                   to="/dialogs">
            <Icofont icon="speech-comments" />
          </NavLink>
          <NavLink className={headerStl.hSmallItm}
                   activeClassName={headerStl.active}
                   to="/blog">
            <Icofont icon="newspaper" />
          </NavLink>
          <NavLink className={headerStl.hSmallItm}
                   activeClassName={headerStl.active}
                   to="/music">
            <Icofont icon="sound-wave-alt" />
          </NavLink>
          <NavLink className={headerStl.hSmallItm}
                   activeClassName={headerStl.active}
                   to="/settings">
            <Icofont icon="settings-alt" />
          </NavLink>
      </nav>

    </div>

      <div className={headerStl.hBig}></div>
    </header>
  )
}
