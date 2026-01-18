import React from "react";
import { useNavigate } from "react-router-dom";

const FormHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="col-md-12 d-flex justify-content-end">
        <font size="0.7%">04/12/2024 13:50:23</font>
      </div>

      <div className="divnavigation">
        <div className="div-block">
          <div className="div-block-2">
            <div data-i18n="nav.INCLUSAO">INCLUSÃO</div>
          </div>
          <img
            src="/assets/CARBONO_ATOR_FORM_files/arrow_separaazul.png"
            loading="lazy"
            alt=""
          />
          <div className="div-block-3">
            <div className="text-block-3" data-i18n="nav.ATOR">
              ATOR
            </div>
          </div>
          <img
            src="/assets/CARBONO_ATOR_FORM_files/arrow_azul_rightazul.png"
            loading="lazy"
            alt=""
          />
        </div>

        <a
          href="#"
          className="voltar w-inline-block"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <img
            src="/assets/CARBONO_ATOR_FORM_files/arrow_azul_leftazul.png"
            loading="lazy"
            alt=""
          />
          <div className="bt_voltar">
            <div className="text-block-2" data-i18n="nav.VOLTAR">
              Voltar
            </div>
          </div>
        </a>
      </div>

      <div className="separator-breadcrumb border-top"></div>
    </>
  );
};

export default FormHeader;
