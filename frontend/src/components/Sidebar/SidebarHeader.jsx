import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/CARBONO_ATOR_GRID_files/logo.png";

const SidebarHeader = () => {
  return (
    <Link to="/" className="logo w-inline-block">
      <img src={logoImg} alt="COGNVOX" className="logomarca" loading="eager" />
    </Link>
  );
};

export default SidebarHeader;
