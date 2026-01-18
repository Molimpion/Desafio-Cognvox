import React from "react";
import { Link } from "react-router-dom";
import userAvatar from "../../assets/CARBONO_ATOR_GRID_files/179FOTOMARKETING.jpg";

const UserProfile = () => {
  return (
    <div className="div_usuario">
      <div className="text-center">
        <Link to="/perfil" className="icon_branco text-center">
          <img
            src={userAvatar}
            loading="lazy"
            alt="Usuario"
            className="foto_usuario2"
          />
          <br />
          <i className="bi bi-camera-fill"></i>
        </Link>
        <br />
      </div>

      <div className="div-block-13 w-clearfix">
        <div className="nome_usuario">ANDRE RIBEIRO</div>

        <a
          href="#"
          id="MENSAGEMICO"
          className="icon_branco"
          onClick={(e) => e.preventDefault()}
        >
          <i className="bi bi-envelope-fill"></i>
          <sup id="totmensagens"> </sup>
        </a>

        <a
          href="#"
          id="AVISOICO"
          className="icon_branco"
          onClick={(e) => e.preventDefault()}
        >
          <i className="bi bi-bell-fill"></i>
          <sup id="totavisos"> </sup>
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
