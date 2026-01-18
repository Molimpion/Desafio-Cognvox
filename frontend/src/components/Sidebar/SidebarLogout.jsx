import React from "react";
import { Link } from "react-router-dom";

const SidebarLogout = () => {
  return (
    <div className="div_menu_logoff">
      <Link to="/logout" className="link-block w-inline-block">
        <div className="icon_17_branco_transp">
          <i className="bi bi-power FontLarger"></i>
        </div>
        <div>SAIR</div>
      </Link>
    </div>
  );
};

export default SidebarLogout;
