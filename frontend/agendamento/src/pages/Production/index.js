import React, { useState, useEffect } from 'react';

import './styles.css';

import NavbarProd from '../../components/NavbarProd';


function Production() {

    const API_URL = `http://localhost:3443/pessoas/`;

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setRecipes(data.Pessoas);
        // console.log(data.Pessoas);
    }

    var test = recipes.map(function (registros) {
        return (

            <tr key={registros.id}>
                <td>{registros.nome_pessoa}</td>
                <td>{registros.cpf_pessoa}</td>
                <td>{registros.data_nascimento}</td>
                <td>{registros.telefone_pessoa}</td>
                <td>{registros.grupo_prioritario ? 'Sim' : 'Não'}</td>
                <td>{registros.endereço_pessoa}</td>
                <td>{registros.email_pessoa}</td>
            </tr>






        ); //retorna o registro 
    });


    return (
        <>


            <NavbarProd />
            <div class="b-example-divider"></div>
            <div className="centralizar-conteudo">
                <div className="col-lg-10 mx-auto p-3 py-md-5">
                    <div id="internaCabecalho" class="input-group ">
                        <img src="./ico/address-book.svg" className="bi " width="40" height="40" title="Ramais" alt="phone"></img>

                        <h1 className="ms-2">Agendamentos</h1>
                    </div>

                    <hr className="col-3 col-md-4 mb-3" />


                    <div id="tableID">

                        <div class="container input-group ">

                            <div class="col p-3">
                                <label for="zip" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="Nome" placeholder="" required />
                            </div>

                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Data</label>
                                <input type="date" name="bday" min="1000-01-01"
                                    max="3000-12-31" class="form-control" />
                            </div>



                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Unidade de Saúde</label>
                                <select class="form-select" id="Unidade" required>
                                    <option value="">Selecione ...</option>
                                    <option>Linhares</option>
                                    <option>Teixeira de Freitas</option>
                                    <option>Viana</option>
                                    <option>Vitoria da Conquista</option>
                                </select>
                            </div>




                        </div>



                        <hr className="col  mb-5" />

                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr className="table-title">
                                    <th scope="col">Nome</th>
                                    <th scope="col">CPF</th>
                                    <th scope="col">Data de nascimento</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Grupo Prioritario</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>

                                {test}



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="b-example-divider mb-0"></div>

            <div className="centralizar-conteudo">
                <div className="col-lg-10 mx-auto p-3 py-md-5">
                    <div id="internaCabecalho" class="input-group ">
                        <img src="./ico/users-alt-3.svg" className="bi " width="40" height="40" title="Ramais" alt="phone"></img>

                        <h1 className="ms-2">Usuários Cadastrados</h1>
                    </div>

                    <hr className="col-3 col-md-5 mb-3" />


                    <div id="tableID">

                        <div class="container input-group ">

                            <div class="col p-3">
                                <label for="zip" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="Nome" placeholder="" required />
                            </div>

                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Data de Nascimento</label>
                                <input type="date" name="bday" min="1000-01-01"
                                    max="3000-12-31" class="form-control" />
                            </div>



                            <div class="col p-3">
                                <label for="zip" class="form-label">CPF</label>
                                <input type="text" class="form-control" id="Nome" placeholder="" required />
                            </div>




                        </div>



                        <hr className="col  mb-5" />

                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr className="table-title">
                                    <th scope="col">Nome</th>
                                    <th scope="col">CPF</th>
                                    <th scope="col">Data de nascimento</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Grupo Prioritario</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>


                                {test}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="b-example-divider mb-0"></div>

            <div className="centralizar-conteudo">
                <div className="col-lg-10 mx-auto p-3 py-md-5">
                    <div id="internaCabecalho" class="input-group ">
                        <img src="./ico/first-aid.svg" className="bi " width="40" height="40" title="Ramais" alt="phone"></img>

                        <h1 className="ms-2">Unidade de Saúde Cadastradas</h1>
                    </div>

                    <hr className="col-3 col-md-7 mb-3" />


                    <div id="tableID">

                        <div class="container input-group ">

                            <div class="col p-3">
                                <label for="zip" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="Nome" placeholder="" required />
                            </div>

                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Data</label>
                                <input type="date" name="bday" min="1000-01-01"
                                    max="3000-12-31" class="form-control" />
                            </div>



                            <div class="col-md-4 p-3" >
                                <label for="state" class="form-label">Unidade de Saúde</label>
                                <select class="form-select" id="Unidade" required>
                                    <option value="">Selecione ...</option>
                                    <option>Linhares</option>
                                    <option>Teixeira de Freitas</option>
                                    <option>Viana</option>
                                    <option>Vitoria da Conquista</option>
                                </select>
                            </div>




                        </div>



                        <hr className="col  mb-5" />

                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr className="table-title">
                                    <th scope="col">Nome</th>
                                    <th scope="col">Setor</th>
                                    <th scope="col">Unidade</th>
                                    <th scope="col">Ramal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th >Adm Peças</th>
                                    <td>Peças</td>
                                    <td>Teixeira de Freitas</td>
                                    <td>6696</td>
                                </tr>
                                <tr>
                                    <th >Israel Ludolf</th>
                                    <td>Analista de Suporte/TI</td>
                                    <td>Viana</td>
                                    <td>1973</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="b-example-divider mb-0"></div>

        </>
    );
}

export default Production;
