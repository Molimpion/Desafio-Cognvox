import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { SidebarService } from "../../services/sidebarService";

const Sidebar = () => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuItems = SidebarService.getMenuItems();
  const userData = SidebarService.getUserData();

  const handleToggle = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className="nav_sidebar">
      <Link to="/" className="logo w-inline-block">
        <img
          src="/assets/CARBONO_ATOR_GRID_files/logo.png"
          loading="eager"
          alt="COGNVOX"
          className="logomarca"
        />
      </Link>

      <div className="div_usuario">
        <div className="text-center">
          <Link to="/perfil" className="icon_branco text-center">
            <img
              src="/assets/CARBONO_ATOR_GRID_files/179FOTOMARKETING.jpg"
              loading="lazy"
              alt=""
              className="foto_usuario2"
            />
            <br />
            <i className="bi bi-camera-fill"></i>
          </Link>
          <br />
        </div>

        <div className="div-block-13 w-clearfix">
          <div className="nome_usuario">{userData.name}</div>
          <a
            href="#"
            className="icon_branco"
            onClick={(e) => e.preventDefault()}
          >
            <i className="bi bi-envelope-fill"></i>
            <sup id="totmensagens"> </sup>
          </a>
          <a
            href="#"
            className="icon_branco"
            onClick={(e) => e.preventDefault()}
          >
            <i className="bi bi-bell-fill"></i>
            <sup id="totavisos"> </sup>
          </a>
        </div>
      </div>

      {menuItems.map((item) => (
        <SidebarItem
          key={item.id}
          item={item}
          isOpen={openMenuId === item.id}
          onToggle={handleToggle}
        />
      ))}

      <div className="div_menu_logoff">
        <Link to="/logout" className="link-block w-inline-block">
          <div className="icon_17_branco_transp">
            <i className="bi bi-power FontLarger"></i>
          </div>
          <div>SAIR</div>
        </Link>
      </div>

      <div className="copyright">
        Copyright © 2024{" "}
        <a href="#" className="linkcopyright">
          COGNVOX
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
