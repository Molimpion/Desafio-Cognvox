import React from "react";
// 1. Importamos o hook de navegação
import { useNavigate } from "react-router-dom";

const ActorTable = () => {
  // 2. Inicializamos o hook
  const navigate = useNavigate();

  return (
    <div className="caixa" id="myTable">
      <div className="table">
        <form name="NavegaExc" id="NavegaInc">
          <input type="hidden" name="ACTIONS" value="inserir" id="ACTIONSi" />

          {/* 3. Adicionamos o evento onClick para navegar */}
          <button
            className="button-3 w-button"
            type="button"
            onClick={() => navigate("/ator/novo")}
          >
            <font style={{ verticalAlign: "inherit" }}>INCLUIR</font>
          </button>
        </form>
      </div>

      <div id="dataTable_wrapper" className="dataTables_wrapper no-footer">
        <div className="dataTables_length" id="dataTable_length">
          <label>
            Exibir{" "}
            <select name="dataTable_length" className="">
              <option value="10">10</option>
              <option value="25">25</option>
            </select>{" "}
            resultados por página
          </label>
        </div>
        <div id="dataTable_filter" className="dataTables_filter">
          <label>
            Pesquisar
            <input type="search" className="" placeholder="" />
          </label>
        </div>

        <table
          align="center"
          id="dataTable"
          className="col-md-12 table table-striped table-bordered table-hover dataTable no-footer"
          role="grid"
        >
          <thead className="table table-striped table-bordered table-hover">
            <tr role="row">
              <th
                className="text-center text-primary sorting_asc"
                style={{ width: "19.6px" }}
              >
                id
              </th>
              <th
                className="text-center text-primary sorting"
                style={{ width: "58.6px" }}
              >
                FOTO
              </th>
              <th
                className="text-center text-primary sorting"
                style={{ width: "106.688px" }}
              >
                DADOS DO ATOR
              </th>
              <th
                className="text-center text-primary sorting"
                style={{ width: "108.438px" }}
              >
                MODALIDADE
              </th>
              <th
                className="text-center text-primary sorting"
                style={{ width: "37.3375px" }}
              >
                TIPO
              </th>
              <th
                className="text-center text-primary sorting"
                style={{ width: "102.225px" }}
              >
                INSTITUIÇÃO
              </th>
              <th
                className="text-center text-primary sorting"
                style={{ width: "84.45px" }}
              >
                MUNICIPIO
              </th>
              <th
                className="text-center text-primary sorting"
                style={{ width: "86.275px" }}
              >
                PARECER
              </th>
              <th
                className="text-center text-primary sorting"
                style={{ width: "61.625px" }}
              >
                STATUS
              </th>
              <th className="sorting" style={{ width: "90.7125px" }}></th>
              <th className="sorting" style={{ width: "93px" }}></th>
            </tr>
          </thead>
          <tbody>
            {/* Exemplo de Linha 1 */}
            <tr role="row" className="odd">
              <td
                className="align_center sorting_1"
                style={{ lineHeight: "1.3" }}
              >
                2979
              </td>
              <td className="align_center" style={{ lineHeight: "1.3" }}>
                <div className="col-md-12 justify-content-center">
                  <img
                    className="image-2 col-md-10"
                    src="/assets/CARBONO_ATOR_GRID_files/2979antonyabel.jpg"
                    alt="Foto"
                  />
                </div>
              </td>
              <td className="align_center" style={{ lineHeight: "1.3" }}>
                ANTHONY GABRIEL DA SILVA DIAS
                <br />5 anos
                <br />
                SESSÃO ANO:1
              </td>
              <td className="align_center" style={{ lineHeight: "1.3" }}>
                Pré-Escola 1-A-Integral
              </td>
              <td className="align_center" style={{ lineHeight: "1.3" }}>
                Ator DI
              </td>
              <td className="align_center" style={{ lineHeight: "1.3" }}>
                Creche Alexandre dos Santos Oliveira
              </td>
              <td className="align_center" style={{ lineHeight: "1.3" }}>
                Coruripe
              </td>
              <td className="align_center" style={{ lineHeight: "1.3" }}></td>
              <td className="align_center" style={{ lineHeight: "1.3" }}>
                Ativo
              </td>
              <td className="align_center">
                <button className="button-3 w-button" type="button">
                  <font style={{ verticalAlign: "inherit" }}>EDITAR</font>
                </button>
              </td>
              <td className="align_center">
                <button className="button-5 w-button" type="button">
                  <font style={{ verticalAlign: "inherit" }}>DELETAR</font>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          className="dataTables_info"
          id="dataTable_info"
          role="status"
          aria-live="polite"
        >
          Mostrando de 1 até 6 de 6 registros
        </div>
        <div
          className="dataTables_paginate paging_simple_numbers"
          id="dataTable_paginate"
        >
          <a
            className="paginate_button previous disabled"
            id="dataTable_previous"
          >
            Anterior
          </a>
          <span>
            <a className="paginate_button current">1</a>
          </span>
          <a className="paginate_button next disabled" id="dataTable_next">
            Próximo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActorTable;
