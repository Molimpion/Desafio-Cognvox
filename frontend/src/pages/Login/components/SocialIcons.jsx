import React from "react";

const SocialIcons = () => {
  return (
    <div className="icons">
      <img
        loading="lazy"
        src="/assets/login_files/web.svg"
        alt="Site COGNVOX"
        width="24"
        height="24"
        className="iconstyle-2 coffee"
      />
      <img
        loading="lazy"
        src="/assets/login_files/instagram.svg"
        alt="Instagram"
        width="24"
        height="24"
        className="iconstyle-2 heart"
      />
      <img
        loading="lazy"
        src="/assets/login_files/at-sign.svg"
        alt="Suporte por email"
        className="iconstyle-2 email"
      />
    </div>
  );
};

export default SocialIcons;
