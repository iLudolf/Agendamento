import React, { useEffect } from 'react';
import './styles.css';

function AgendamentoProd() {

    return (
        <>
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <h2>Novo agendamento</h2>
                        <p className="lead">Para sua segurança e preservação dos dados pessoais é necessário informar o código do agendamento para imprimir ou cancelar.</p>
                    </div>

                    <div className="card">
                        <div>
                            <h4 className="mb-3">Preencha os campos abaixo</h4>
                            {/* <form className ="needs-validation" > */}
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label">Nome </label>
                                    <input type="text" className="form-control" id="name" placeholder="" required />
                                    <div classNameN="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <label for="lastName" className="form-label">CPF</label>
                                    <input type="text" className="form-control" id="cpf" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>


                                <div className="col-sm-3">
                                    <label for="username" className="form-label">Celular</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">+55</span>
                                        <input type="text" className="form-control" id="Telefone" placeholder="Celular" required />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-3" >
                                    <label for="state" class="form-label">Data de Nascimento</label>
                                    <input type="date" name="bday" id="DatadeNascimento" min="1000-01-01"
                                        max="3000-12-31" class="form-control" />
                                </div>

                                <div className="col-md-3">
                                    <label for="country" className="form-label">Sexo <span className="text-muted">(Optional)</span></label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Escolher...</option>
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>


                                <div className="col-sm-6">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="seu@examplo.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <label for="email" className="form-label">Logradouro/Nome</label>
                                    <input type="email" className="form-control" id="email" placeholder="seu@examplo.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <label for="email" className="form-label">Bairro/Distrito</label>
                                    <input type="email" className="form-control" id="email" placeholder="seu@examplo.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <label for="email" className="form-label">Localidade/UF</label>
                                    <input type="email" className="form-control" id="email" placeholder="seu@examplo.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                               
                                <div className="col-sm-3">
                                    <label for="email" className="form-label">CEP</label>
                                    <input type="email" className="form-control" id="email" placeholder="seu@examplo.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                              

                                <div className="col-md-6">
                                    <label for="state" className="form-label">Unidade de Saúde</label>
                                    <select className="form-select" id="state" required>
                                        <option value="">Escolher...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>





                                <div className="col-md-3">
                                    <label for="country" className="form-label">Gropo Prioritario</label>
                                    <select className="form-select" id="gropoPrioritario" required>
                                        <option value="">Escolher...</option>
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div class="col-sm-3" >
                                    <label for="state" class="form-label">Data</label>
                                    <input type="date" name="bday" min="1000-01-01"
                                        max="3000-12-31" class="form-control" />
                                </div>


                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" for="save-info">Save this information for next time</label>
                            </div>

                            <hr className="my-4" />


                            <button type="button" class="btn btn-primary" onClick={() => enviarDados()}>Enviar</button>
                            <button type="button" class="btn btn-secondary mx-2">Buscar</button>



                            {/* </form> */}
                        </div>
                    </div>
                </main>


            </div>

        </>
    );
}







const enviarDados = async () => {

    const API_URL = `http://localhost:3443/pessoas/`;
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pegaDados())
    });
    const data = await response.json();
    console.log(data);
}



function pegaDados() {
    let nomePessoa = document.getElementById('name').value;
    let cpfPessoa = document.getElementById('cpf').value;
    let dataNascimento = document.getElementById('DatadeNascimento').value;
    let telefonePessoa = document.getElementById('Telefone').value;
    let grupoPrioritario = document.getElementById('gropoPrioritario').value;


    var data = {
        "nome_pessoa": nomePessoa,
        "cpf_pessoa": cpfPessoa,
        "data_nascimento": dataNascimento,
        "telefone_pessoa": telefonePessoa,
        "grupo_prioritario": grupoPrioritario,
    }

    return data;
}

export default AgendamentoProd;
