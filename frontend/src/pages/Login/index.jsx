import React, { useEffect } from "react";
import SocialIcons from "./components/SocialIcons";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="loginsection">
      <div className="glasscard">
        <div className="avatarwrapper">
          <img
            loading="lazy"
            src="/assets/login_files/estudantesCognvox.png"
            alt="Estudantes"
          />
        </div>

        <SocialIcons />

        <div className="contentwrapper">
          <div className="innercontent">
            <div className="centeredcontent">
              <LoginHeader />
              <div className="w-100"></div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>

      <div className="blurbg"></div>
      <div className="overlay"></div>
    </div>
  );
};

export default LoginPage;
