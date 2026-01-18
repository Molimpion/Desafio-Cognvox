import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/atores");
    }, 1500);
  };

  return (
    <div className="w-form">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="inputlogin w-input"
          placeholder="Usuário"
          id="Login"
          required
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="password"
          className="inputlogin senha w-input"
          placeholder="Senha"
          id="Senha"
          required
          autoComplete="current-password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="div-block-24 row">
          {!isLoading ? (
            <div className="col-md-6" id="entrar">
              <input
                type="submit"
                value="ENTRAR"
                id="ENTRAR"
                className="bt_login w-button"
              />
            </div>
          ) : (
            <div className="col-md-6" id="aguarde" style={{ display: "block" }}>
              <img
                src="/assets/login_files/aguarde.gif"
                height="50px"
                alt="Carregando..."
              />
            </div>
          )}

          <div className="col-md-12 my-2">
            <a href="#" className="esqueceuasenha">
              Esqueceu a Senha?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
