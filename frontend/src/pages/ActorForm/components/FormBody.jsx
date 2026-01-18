import React, { useState } from "react";

const FormBody = () => {
  const [fotoPreview, setFotoPreview] = useState(
    "/assets/CARBONO_ATOR_FORM_files/aluno_default.png",
  );

  return (
    <div className="row caixa">
      <div className="col-md-12">
        <div className="mb-3">
          <div className="card-body">
            <form
              method="post"
              name="form"
              id="form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="row caixa">
                <label
                  className="text-primary"
                  htmlFor="HEXADECIMALFOTO"
                  data-i18n="nav.FOTO"
                >
                  FOTO
                </label>
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
                      id="APAGFOTO"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setFotoPreview(
                          "/assets/CARBONO_ATOR_FORM_files/aluno_default.png",
                        )
                      }
                    ></i>
                  </div>
                  <input
                    className="button-1"
                    type="file"
                    id="arquivoUpload"
                    name="arquivoUpload"
                    accept="image/*"
                  />
                  <br />
                  <input
                    className="button-3 w-button my-4"
                    type="button"
                    id="ENVIARFOTO"
                    name="ENVIARFOTO"
                    value="ENVIAR"
                  />
                </div>

                <div className="col-md-6">
                  <input id="ID" name="ID" defaultValue="" type="hidden" />
                  <input
                    id="HEXADECIMALFOTO"
                    name="HEXADECIMALFOTO"
                    defaultValue=""
                    type="hidden"
                  />
                  <input type="hidden" name="actions" defaultValue="insert" />
                  <input type="hidden" name="status" defaultValue="1" />
                </div>
                <div className="col-md-12"></div>

                <div className="col-md-9 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="NOME"
                    data-i18n="nav.NOME"
                  >
                    NOME
                  </label>{" "}
                  (*)
                  <input
                    className="text-field-2 w-input col-md-12"
                    id="NOME"
                    name="NOME"
                    maxLength="100"
                    type="text"
                    placeholder="Entre com o nome"
                    required
                  />
                </div>

                <div className="col-md-2 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="ANO_SESSAO"
                    data-i18n="nav.ANO_SESSAO"
                  >
                    SESSÃO ANO:
                  </label>{" "}
                  (*)
                  <input
                    className="text-field-2 w-input col-md-12"
                    id="ANO_SESSAO"
                    name="ANO_SESSAO"
                    maxLength="100"
                    type="text"
                    placeholder="Entre com o ano da sessao"
                    required
                  />
                </div>

                <div className="col-md-3 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="PROFISSAOID"
                    data-i18n="nav.TIPODOATOR"
                  >
                    TIPO DO ATOR ou PROFISSÃO
                  </label>{" "}
                  (*)
                  <select
                    required
                    className="text-field-2 w-input"
                    name="PROFISSAOID"
                    id="PROFISSAOID"
                    defaultValue="-1"
                  >
                    <option value="-1">Selecione</option>
                    <option value="100">Assistente Pedagógico (ARIS)</option>
                    <option value="6">Assistente Social </option>
                    <option value="1">Ator DI</option>
                    <option value="34">Aux. de Escritório</option>
                    <option value="35">Aux. de Limpeza</option>
                    <option value="36">Balconista</option>
                    <option value="37">Cozinheiro</option>
                    <option value="38">Embalador</option>
                    <option value="40">Estoquista</option>
                    <option value="8">Fonoaudióloga </option>
                    <option value="39">Garçom</option>
                    <option value="41">Office-boy</option>
                    <option value="99">Outros</option>
                    <option value="28">Pai ou Responsável</option>
                    <option value="2">Par Interacional</option>
                    <option value="5">Pedagogo</option>
                    <option value="4">Professor</option>
                    <option value="3">Psicólogo</option>
                    <option value="42">Recepcionista</option>
                    <option value="43">Repositor</option>
                    <option value="7">Terapeuta</option>
                  </select>
                </div>

                <div className="col-md-3 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="DATANASCIMENTO"
                    data-i18n="nav.DATADENASCIMENTO"
                  >
                    DATA DE NASCIMENTO
                  </label>{" "}
                  (*)
                  <input
                    className="text-field-2 w-input"
                    id="DATANASCIMENTO"
                    name="DATANASCIMENTO"
                    type="date"
                    placeholder="DD-MM-YYYY"
                    required
                  />
                </div>

                <div className="col-md-3 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="DATAINICIOINTERVENCAO"
                    data-i18n="nav.DATAINICIOINTERVENCAO"
                  >
                    INICIO INTERVANÇÃO
                  </label>{" "}
                  (*)
                  <input
                    className="text-field-2 w-input"
                    id="DATAINICIOINTERVENCAO"
                    name="DATAINICIOINTERVENCAO"
                    type="date"
                    placeholder="DD-MM-YYYY"
                  />
                </div>

                <div
                  className="col-md-12 mx-1 row"
                  id="RESPONSAVEIS"
                  name="RESPONSAVEIS"
                  style={{ display: "none" }}
                ></div>

                <div className="col-md-4 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="EMAIL"
                    data-i18n="nav.EMAIL"
                  >
                    E-MAIL
                  </label>{" "}
                  (*)
                  <input
                    className="text-field-2 w-input"
                    id="EMAIL"
                    name="EMAIL"
                    maxLength="100"
                    type="email"
                    placeholder="Entre com o e-mail"
                    required
                  />
                  <input type="hidden" name="oldemail" defaultValue="" />
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="IDIOMAID"
                    data-i18n="nav.IDIOMA"
                  >
                    IDIOMA
                  </label>
                  (*)
                  <select
                    required
                    className="text-field-2 w-input"
                    name="IDIOMAID"
                    id="IDIOMAID"
                    defaultValue="-1"
                  >
                    <option value="-1">Selecione</option>
                    <option value="1">Portugues</option>
                    <option value="2">English</option>
                  </select>
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="UNIDADEID"
                    data-i18n="nav.INSTITUICAO"
                  >
                    INSTITUIÇÃO
                  </label>
                  (*)
                  <select
                    required
                    className="text-field-2 w-input"
                    name="UNIDADEID"
                    id="UNIDADEID"
                    defaultValue="-1"
                  >
                    <option value="-1">Selecione</option>
                    <option value="23">COGNVOX</option>
                    <option value="72">
                      Creche Alexandre dos Santos Oliveira
                    </option>
                    <option value="41">Creche Denilma Bulhões</option>
                    <option value="85">Creche João Trajano dos Santos</option>
                    <option value="42">Creche Lúcia Nogueira</option>
                    <option value="74">
                      Creche Maria Zenaide Rocha Santos
                    </option>
                    <option value="58">Creche Menino Jesus</option>
                    <option value="73">
                      Creche Professor Manoel Cecílio de Jesus
                    </option>
                    <option value="43">Creche Rosete Andrade</option>
                    <option value="44">Creche Vovó Judith</option>
                    <option value="86">Curso Formação Psicólogos</option>
                    <option value="59">Escola Antônio Cândido Toledo</option>
                    <option value="45">Escola Barão de Penedo</option>
                    <option value="35">
                      Escola Cláudio Daniel Gama Amorim
                    </option>
                    <option value="60">Escola Côn. Teotônio Ribeiro</option>
                    <option value="46">Escola Dom Constantino Luers</option>
                    <option value="78">
                      Escola Eng. Guttemberg Brêda Breda Netto
                    </option>
                    <option value="75">Escola Fausto Ferreira Simões</option>
                    <option value="76">Escola Francisco Amálio Maria</option>
                    <option value="77">Escola Francisco Araújo Azevedo</option>
                    <option value="34">Escola General de Góes Monteiro</option>
                    <option value="61">Escola Hanna Bertholet</option>
                    <option value="47">Escola Irmã Jolenta</option>
                    <option value="62">
                      Escola Isabel Cristina Alves Toledo
                    </option>
                    <option value="63">Escola João XXIII</option>
                    <option value="48">Escola Josef Bergman</option>
                    <option value="79">Escola José Buarque da Silva</option>
                    <option value="36">Escola José de Carvalho Souza</option>
                    <option value="40">Escola Liege Gama Rocha</option>
                    <option value="49">Escola Manoel Tavares</option>
                    <option value="64">
                      Escola Maria da Glória Pimenteira
                    </option>
                    <option value="81">Escola Nossa Sra. do Mont Serrat</option>
                    <option value="65">Escola Paulo VI</option>
                    <option value="66">
                      Escola Professor Arlindo Ferreira de Moraes
                    </option>
                    <option value="50">
                      Escola Professor Douglas Apratto Tenório
                    </option>
                    <option value="67">Escola Professor Irênio Araújo</option>
                    <option value="28">
                      Escola Professor Pedro Augusto Carneiro Leão
                    </option>
                    <option value="57">
                      Escola Professora Helena de O. de Carvalho
                    </option>
                    <option value="37">
                      Escola Professora Maria Rocha Santos Silva
                    </option>
                    <option value="51">Escola Rotary</option>
                    <option value="82">Escola Santa Ana</option>
                    <option value="68">Escola Santa Cândida</option>
                    <option value="56">Escola Santa Luzia</option>
                    <option value="39">Escola Santa Sofia</option>
                    <option value="83">Escola Santa Terezinha</option>
                    <option value="69">Escola Santo Antônio</option>
                    <option value="70">Escola São João Batista</option>
                    <option value="84">Escola São Rafael</option>
                    <option value="71">ESCOLA TESTE</option>
                    <option value="53">
                      Escola Ver. José da Costa Mangabeira
                    </option>
                    <option value="80">
                      Escola Ver. José Wilson Melo Nascimento
                    </option>
                    <option value="54">
                      Escola Ver. Manoel Soares de Melo
                    </option>
                    <option value="55">Escola Wilton Lisboa Lucena</option>
                  </select>
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="ENDERECO"
                    data-i18n="nav.ENDERECO"
                  >
                    ENDEREÇO
                  </label>
                  <input
                    className="text-field-2 w-input"
                    id="ENDERECO"
                    name="ENDERECO"
                    maxLength="500"
                    type="text"
                    placeholder="Entre com o ENDEREÇO."
                  />
                </div>
                <div className="col-md-4 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="CIDADE"
                    data-i18n="nav.CIDADE"
                  >
                    CIDADE
                  </label>
                  <input
                    className="text-field-2 w-input"
                    id="CIDADE"
                    name="CIDADE"
                    maxLength="100"
                    type="text"
                    placeholder="Entre com a CIDADE."
                  />
                </div>
                <div className="col-md-4 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="ESTADO"
                    data-i18n="nav.ESTADO"
                  >
                    ESTADO
                  </label>
                  <select
                    id="ESTADO"
                    name="ESTADO"
                    className="text-field-2 w-input"
                    defaultValue=""
                  >
                    <option value="">Selecione</option>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AM">AM</option>
                    <option value="AP">AP</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MG">MG</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="PR">PR</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="RS">RS</option>
                    <option value="SC">SC</option>
                    <option value="SE">SE</option>
                    <option value="SP">SP</option>
                    <option value="TO">TO</option>
                  </select>
                </div>
                <div className="col-md-4 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="PAIS"
                    data-i18n="nav.PAIS"
                  >
                    PAIS
                  </label>
                  <input
                    className="text-field-2 w-input"
                    id="PAIS"
                    name="PAIS"
                    maxLength="500"
                    type="text"
                    placeholder="Entre com o PAIS."
                  />
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="MODALIDADEENSINOID"
                    data-i18n="nav.MODALIDADEDEENSINO"
                  >
                    MODALIDADE DE ENSINO (*)
                  </label>
                  <select
                    required
                    className="text-field-2 w-input"
                    name="MODALIDADEENSINOID"
                    id="MODALIDADEENSINOID"
                    defaultValue="-1"
                  >
                    <option value="-1">Selecione a modalidade</option>
                    <option value="233">Creche II-B-Tarde</option>
                    <option value="248">163-114-59</option>
                    <option value="40">1º Ano - A - Manhã</option>
                    <option value="128">1º Ano - A - Tarde</option>
                    <option value="84">1º Ano - B - Manhã</option>
                    <option value="61">1º Ano - B - Tarde</option>
                    <option value="95">1º Ano - C - Tarde</option>
                    <option value="55">1º Ano - D - Tarde</option>
                    <option value="54">1º Ano - E - Tarde</option>
                    <option value="193">1º Ano-A-Manhã</option>
                    <option value="162">1º Ano-A-Tarde</option>
                    <option value="200">1º Ano-B-Manhã</option>
                    <option value="163">1º Ano-B-Tarde</option>
                    <option value="201">1º Ano-C-Tarde</option>
                    <option value="202">1º Ano-D-Tarde</option>
                    <option value="41">2º Ano - A - Manhã</option>
                    <option value="79">2º Ano - A - Tarde</option>
                    <option value="42">2º Ano - B - Manhã</option>
                    <option value="114">2º Ano - B - Tarde</option>
                    <option value="137">2º Ano - C - Manhã</option>
                    <option value="96">2º Ano - C - Tarde</option>
                    <option value="85">2º Ano - D - Tarde</option>
                    <option value="138">2º Ano - E - Manhã</option>
                    <option value="60">2º Ano - E - Tarde</option>
                    <option value="23">MODALIDADE COGNVOX</option>
                  </select>
                </div>

                <div className="col-md-4 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="USUARIO"
                    data-i18n="nav.USUARIO"
                  >
                    USUÁRIO (*)
                  </label>
                  <input
                    className="text-field-2 w-input"
                    id="USUARIO"
                    name="USUARIO"
                    maxLength="100"
                    type="text"
                    placeholder="Informe seu usuário!"
                    required
                  />
                </div>

                <div className="col-md-4 form-group mx-1 row">
                  <label
                    className="text-primary col-md-12"
                    htmlFor="SENHA"
                    data-i18n="nav.SENHA"
                  >
                    SENHA (*)
                  </label>
                  <input
                    className="text-field-2 w-input col-md-8"
                    id="SENHA"
                    name="SENHA"
                    minLength="8"
                    maxLength="100"
                    type="password"
                    placeholder="Informe sua senha!"
                    required
                  />
                  <div className="col-md-4" id="password-status"></div>
                </div>

                <div className="col-md-8 form-group mx-1 row">
                  <div className="col-md-7">&nbsp;</div>
                  <div className="col-md-5">
                    <label className="mx-1">A senha deve ter:</label>
                    <br />
                    <div className="small" id="password-strength">
                      <li>No mínimo 8 caracteres;</li>
                      <li>Números de 0 a 9;</li>
                      <li>Letras Minúsculas;</li>
                      <li>Letras Maiúsculas;</li>
                      <li>Caractere Especial;</li>
                    </div>
                  </div>
                </div>

                <div className="col-md-8 form-group mx-1">
                  <label
                    className="text-primary"
                    htmlFor="GRUPO_USUARIO"
                    data-i18n="nav.GRUPODEACESSODOUSUARIO"
                  >
                    GRUPO DE ACESSO DO USUÁRIO (*)
                  </label>
                  <select
                    required
                    className="text-field-2 w-input"
                    name="GRUPO_USUARIO"
                    id="GRUPO_USUARIO"
                    defaultValue="-1"
                  >
                    <option value="-1">Selecione o nível de acesso</option>
                    <option value="1">Administrador</option>
                    <option value="3">Administradores COGNVOX</option>
                    <option value="4">Aluno DI</option>
                    <option value="5">Aluno Interacional</option>
                    <option value="12">Aluno Profissional</option>
                    <option value="14">Apoio Técnico Pedagógico</option>
                    <option value="13">Assistente Pedagógico (ARIS)</option>
                    <option value="7">Assistente Social</option>
                    <option value="16">Coordenadora de Inclusão</option>
                    <option value="11">Coordenadores</option>
                    <option value="18">Estagiário Pedagogia</option>
                    <option value="17">Help Desk</option>
                    <option value="6">Pai ou Responsável</option>
                    <option value="10">Professores</option>
                    <option value="19">PSICOLOGOS_EAD</option>
                    <option value="15">Psicólogo Supervisor</option>
                    <option value="8">Psicólogos</option>
                    <option value="9">Suporte</option>
                  </select>
                </div>

                <div className="col-md-12 my-3 row">
                  <div className="col-md-auto">
                    <input
                      type="submit"
                      name="btn_Incluir"
                      value="GRAVAR"
                      id="btn_Incluir"
                      className="button-3 w-button"
                    />
                    <input
                      type="button"
                      value="VOLTAR"
                      name="btn_Voltar"
                      id="btn_Voltar"
                      className="button-3 w-button"
                      onClick={() => window.history.back()}
                    />
                    <input
                      type="reset"
                      name="btn_Reset"
                      value="LIMPAR"
                      id="btn_Reset"
                      className="button-3 w-button"
                    />
                  </div>
                  <input
                    type="button"
                    className="button-2 w-button col-md-3"
                    value="INCLUIR MULTIPLOS VIA PLANILHA"
                  />
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
