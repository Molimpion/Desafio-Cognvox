import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActorService from "../../../services/actorService";

const ActorTable = () => {
  const navigate = useNavigate();
  const [atores, setAtores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAtores();
  }, []);

  const fetchAtores = async () => {
    try {
      const data = await ActorService.getAll();
      setAtores(data);
    } catch (error) {
      console.error("Erro ao carregar lista:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem a certeza que deseja excluir este ator?")) {
      try {
        await ActorService.delete(id);
        fetchAtores();
      } catch (error) {
        alert("Erro ao excluir ator.");
      }
    }
  };

  return (
    <div className="caixa" id="myTable">
      <div className="table">
        <form name="NavegaExc" id="NavegaInc">
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
        <table
          align="center"
          id="dataTable"
          className="col-md-12 table table-striped table-bordered table-hover dataTable no-footer"
          role="grid"
        >
          <thead className="table table-striped table-bordered table-hover">
            <tr role="row">
              <th className="text-center text-primary">id</th>
              <th className="text-center text-primary">FOTO</th>
              <th className="text-center text-primary">DADOS DO ATOR</th>
              <th className="text-center text-primary">EMAIL/CONTATO</th>
              <th className="text-center text-primary">INSTITUIÇÃO (ID)</th>
              <th className="text-center text-primary">STATUS</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" className="text-center">
                  Carregando...
                </td>
              </tr>
            ) : atores.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center">
                  Nenhum ator encontrado.
                </td>
              </tr>
            ) : (
              atores.map((ator) => (
                <tr role="row" className="odd" key={ator.id}>
                  <td className="align_center" style={{ lineHeight: "1.3" }}>
                    {ator.id}
                  </td>
                  <td className="align_center">
                    <div className="col-md-12 justify-content-center">
                      <img
                        className="image-2 col-md-10"
                        src="/assets/CARBONO_ATOR_GRID_files/aluno_default.png"
                        alt="Foto"
                        style={{ maxWidth: "50px" }}
                      />
                    </div>
                  </td>
                  <td className="align_center" style={{ lineHeight: "1.3" }}>
                    {ator.nome}
                    <br />
                    <small>Nasc: {ator.data_nascimento}</small>
                  </td>
                  <td className="align_center" style={{ lineHeight: "1.3" }}>
                    {ator.email}
                    <br />
                    {ator.telefone_cel}
                  </td>
                  <td className="align_center" style={{ lineHeight: "1.3" }}>
                    {ator.unidade_id}
                  </td>
                  <td className="align_center" style={{ lineHeight: "1.3" }}>
                    {ator.status_cod === 1 ? "Ativo" : "Inativo"}
                  </td>
                  <td className="align_center">
                    <button
                      className="button-3 w-button"
                      type="button"
                      onClick={() => alert(`Editar ID: ${ator.id}`)}
                    >
                      EDITAR
                    </button>
                  </td>
                  <td className="align_center">
                    <button
                      className="button-5 w-button"
                      type="button"
                      onClick={() => handleDelete(ator.id)}
                    >
                      DELETAR
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActorTable;
