import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActorService from "../../../services/actorService";

const FormBody = () => {
  const navigate = useNavigate();
  const [fotoPreview, setFotoPreview] = useState(
    "/assets/CARBONO_ATOR_FORM_files/aluno_default.png"
  );
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    ano_sessao: "",
    profissao_id: "",
    data_nascimento: "",
    data_inicio_intervencao: "",
    email: "",
    idioma_id: "",
    unidade_id: "",
    endereco: "",
    cidade: "",
    estado: "",
    pais: "",
    modalidade_ensino_id: "",
    login: "",
    senha: "",
    grupo_usuario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name.toLowerCase()]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      profissao_id: parseInt(formData.profissao_id) || null,
      unidade_id: parseInt(formData.unidade_id) || null,
      idioma_id: parseInt(formData.idioma_id) || null,
      modalidade_ensino_id: parseInt(formData.modalidade_ensino_id) || null,
      grupo_usuario: parseInt(formData.grupo_usuario) || 1,
      data_inicio_intervencao: formData.data_inicio_intervencao || null, 
      cpf: "000.000.000-00"
    };

    try {
      await ActorService.create(payload);
      alert("Ator cadastrado com sucesso!");
      navigate("/atores");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar. Verifique se o e-mail ou usuário já existem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row caixa">
      <div className="col-md-12">
        <div className="mb-3">
          <div className="card-body">
            <form onSubmit={handleSubmit} id="form">
              <div className="row caixa">
                
                <label className="text-primary">FOTO</label>
                <div className="col-md-3 align_center ">
                  <div className="mx-4 align_center caixa" id="EXIBEFOTO">
                    <img
                      className="my-3"
                      height="200"
                      width="200"
                      src={fotoPreview}
                      alt="Preview"
                    />
                    <i
                      className="bi bi-trash-fill"
                      style={{ cursor: "pointer" }}
                      onClick={() => setFotoPreview("/assets/CARBONO_ATOR_FORM_files/aluno_default.png")}
                    ></i>
                  </div>
                  <input className="button-1" type="file" accept="image/*" />
                </div>

                <div className="col-md-6">
                </div>
                <div className="col-md-12"></div>

                <div className="col-md-9 form-group mx-1">
                  <label className="text-primary">NOME (*)</label>
                  <input
                    className="text-field-2 w-input col-md-12"
                    name="NOME"
                    value={formData.nome}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="Entre com o nome"
                  />
                </div>

                <div className="col-md-2 form-group mx-1">
                  <label className="text-primary">SESSÃO ANO: (*)</label>
                  <input
                    className="text-field-2 w-input col-md-12"
                    name="ANO_SESSAO"
                    value={formData.ano_sessao}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>

                <div className="col-md-3 form-group mx-1">
                  <label className="text-primary">TIPO DO ATOR (*)</label>
                  <select
                    className="text-field-2 w-input"
                    name="PROFISSAO_ID"
                    value={formData.profissao_id}
                    onChange={(e) => setFormData({...formData, profissao_id: e.target.value})}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="1">Ator DI</option>
                    <option value="4">Professor</option>
                    <option value="3">Psicólogo</option>
                    <option value="28">Aluno</option>
                    <option value="28">Pai ou Responsável</option>
                  </select>
                </div>

                <div className="col-md-3 form-group mx-1">
                  <label className="text-primary">DATA DE NASCIMENTO (*)</label>
                  <input
                    className="text-field-2 w-input"
                    name="DATA_NASCIMENTO"
                    value={formData.data_nascimento}
                    onChange={(e) => setFormData({...formData, data_nascimento: e.target.value})}
                    type="date"
                    required
                  />
                </div>

                <div className="col-md-3 form-group mx-1">
                  <label className="text-primary">INICIO INTERVANÇÃO</label>
                  <input
                    className="text-field-2 w-input"
                    name="DATA_INICIO_INTERVENCAO"
                    value={formData.data_inicio_intervencao}
                    onChange={(e) => setFormData({...formData, data_inicio_intervencao: e.target.value})}
                    type="date"
                  />
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label className="text-primary">E-MAIL (*)</label>
                  <input
                    className="text-field-2 w-input"
                    name="EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label className="text-primary">IDIOMA (*)</label>
                  <select
                    className="text-field-2 w-input"
                    name="IDIOMA_ID"
                    value={formData.idioma_id}
                    onChange={(e) => setFormData({...formData, idioma_id: e.target.value})}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="1">Português</option>
                    <option value="2">Inglês</option>
                  </select>
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label className="text-primary">INSTITUIÇÃO (*)</label>
                  <select
                    className="text-field-2 w-input"
                    name="UNIDADE_ID"
                    value={formData.unidade_id}
                    onChange={(e) => setFormData({...formData, unidade_id: e.target.value})}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="1">Matriz Recife</option>
                    <option value="23">COGNVOX</option>
                  </select>
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label className="text-primary">ENDEREÇO</label>
                  <input
                    className="text-field-2 w-input"
                    name="ENDERECO"
                    value={formData.endereco}
                    onChange={handleChange}
                    type="text"
                  />
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label className="text-primary">CIDADE</label>
                  <input
                    className="text-field-2 w-input"
                    name="CIDADE"
                    value={formData.cidade}
                    onChange={handleChange}
                    type="text"
                  />
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label className="text-primary">ESTADO</label>
                  <select
                    className="text-field-2 w-input"
                    name="ESTADO"
                    value={formData.estado}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    <option value="PE">PE</option>
                    <option value="SP">SP</option>
                    <option value="RJ">RJ</option>
                  </select>
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label className="text-primary">PAIS</label>
                  <input
                    className="text-field-2 w-input"
                    name="PAIS"
                    value={formData.pais}
                    onChange={handleChange}
                    type="text"
                  />
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label className="text-primary">MODALIDADE DE ENSINO (*)</label>
                  <select
                    className="text-field-2 w-input"
                    name="MODALIDADE_ENSINO_ID"
                    value={formData.modalidade_ensino_id}
                    onChange={(e) => setFormData({...formData, modalidade_ensino_id: e.target.value})}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="1">Presencial</option>
                    <option value="2">EAD</option>
                  </select>
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label className="text-primary">USUÁRIO (*)</label>
                  <input
                    className="text-field-2 w-input"
                    name="LOGIN"
                    value={formData.login}
                    onChange={(e) => setFormData({...formData, login: e.target.value})}
                    type="text"
                    required
                  />
                </div>

                <div className="col-md-4 form-group mx-1 row">
                  <label className="text-primary col-md-12">SENHA (*)</label>
                  <input
                    className="text-field-2 w-input col-md-12"
                    name="SENHA"
                    value={formData.senha}
                    onChange={(e) => setFormData({...formData, senha: e.target.value})}
                    type="password"
                    minLength="8"
                    required
                  />
                </div>

                <div className="col-md-8 form-group mx-1">
                  <label className="text-primary">GRUPO DE ACESSO (*)</label>
                  <select
                    className="text-field-2 w-input"
                    name="GRUPO_USUARIO"
                    value={formData.grupo_usuario}
                    onChange={(e) => setFormData({...formData, grupo_usuario: e.target.value})}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="1">Administrador</option>
                    <option value="4">Aluno DI</option>
                    <option value="10">Professor</option>
                  </select>
                </div>

                <div className="col-md-12 my-3 row">
                  <div className="col-md-auto">
                    <input
                      type="submit"
                      value={loading ? "GRAVANDO..." : "GRAVAR"}
                      className="button-3 w-button"
                      disabled={loading}
                    />
                    <input
                      type="button"
                      value="VOLTAR"
                      className="button-3 w-button"
                      onClick={() => navigate("/atores")}
                      style={{marginLeft: "10px"}}
                    />
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBody;