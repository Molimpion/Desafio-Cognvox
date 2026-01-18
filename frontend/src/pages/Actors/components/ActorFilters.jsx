import React from "react";

const ActorFilters = () => {
  return (
    <div className="caixa">
      <div className="col-md-12 row">
        <label className="col-md-12">FILTRO PARA PESQUISA DE ATOR</label>
        <hr />
        <form action="#" className="row" onSubmit={(e) => e.preventDefault()}>
          <div className="col-md-3">
            <div>
              <label>Município</label>
            </div>
            <div>
              <select
                className="text-field-2 w-input"
                name="CIDADE"
                id="CIDADE"
              >
                <option value="0">Selecione a Cidade</option>
                <option value="Coruripe" selected>
                  Coruripe
                </option>
                <option value="Penedo">Penedo</option>
                <option value="Recife">Recife</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <label>Instituição</label>
            </div>
            <div>
              <select
                className="text-field-2 w-input"
                name="UNIDADEID"
                id="UNIDADEID"
              >
                <option value="0">Selecione TODAS Instituiçôes</option>
                <option value="72" selected>
                  Creche Alexandre dos Santos Oliveira
                </option>
                <option value="41">Creche Denilma Bulhões</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <label>Modalidade</label>
            </div>
            <div>
              <select
                className="text-field-2 w-input"
                name="MODALIDADEID"
                id="MODALIDADEID"
              >
                <option value="0">Selecione TODAS Modalidades</option>
                <option value="233">Creche II-B-Tarde</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <label>Tipo</label>
            </div>
            <div>
              <select
                className="text-field-2 w-input"
                name="TIPOID"
                id="TIPOID"
              >
                <option value="0">Selecione TODOS Tipos</option>
                <option value="1" selected>
                  Ator DI
                </option>
                <option value="4">Professor</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <input
              className="button-3 w-button"
              type="submit"
              id="submit"
              name="submit"
              value="PESQUISAR"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActorFilters;
