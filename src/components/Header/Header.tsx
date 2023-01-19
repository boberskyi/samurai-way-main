import React from "react";
import headerStl from './header.module.css';
import {NavLink} from "react-router-dom";
import {FaMusic, FaPencilAlt, FaRegUser} from "react-icons/fa";
import { BiMessageAlt } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";


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
            <FaRegUser className={headerStl.icon}/>
          </NavLink>
          <NavLink className={headerStl.hSmallItm}
                   activeClassName={headerStl.active}
                   to="/messages">
            <BiMessageAlt className={headerStl.icon} />
          </NavLink>
          <NavLink className={headerStl.hSmallItm}
                   activeClassName={headerStl.active}
                   to="/blog">
            <FaPencilAlt className={headerStl.icon} />
          </NavLink>
          <NavLink className={headerStl.hSmallItm}
                   activeClassName={headerStl.active}
                   to="/music">
            <FaMusic className={headerStl.icon} />
          </NavLink>
          <NavLink className={headerStl.hSmallItm}
                   activeClassName={headerStl.active}
                   to="/settings">
            <IoIosSettings className={headerStl.icon} />
          </NavLink>
      </nav>

    </div>

      <div className={headerStl.hBig}></div>
    </header>
  )
}
