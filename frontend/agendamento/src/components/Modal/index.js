import React, {useState} from 'react';




const Modal = ({id, nome, descricao, endereco, telefone, mail}) => {

 
    return (
        <div >           
            <a href="" data-bs-toggle="modal" data-bs-target="#modalProfile">  <img src="./spanner.svg" className="bi " width="25" height="25" title="cardapio" alt="cardapio"></img></a>


            <div className="modal fade" id="modalProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{nome} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>



                        <div className="container" id="modalConteudo">
                            <div className="modal-body" id="modalBody">


                                <main>
                                    <div className="py-5 text-center">
                                        <h2>Alterar Unidade de saúde</h2>
                                        <p className="lead">Para sua segurança e preservação dos dados pessoais é necessário informar o código do agendamento para imprimir ou cancelar.</p>
                                    </div>
                                    <form class="needs-validation" novalidate>
                                        <div className="card">
                                            <div>
                                                <h4 className="mb-3">Preencha os campos abaixo</h4>
                                                <form className="needs-validation" >
                                                    <div className="row g-3">
                                                        <div className="col-sm-6">
                                                            <label for="firstName" className="form-label" >Nome da unidade</label>
                                                            <input type="text" className="form-control" id="nomeUnidade" placeholder={nome} />

                                                        </div>


                                                        <div className="col-sm-3">
                                                            <label for="username" className="form-label">Telefone</label>
                                                            <div className="input-group has-validation">
                                                                <span className="input-group-text">+55</span>
                                                                <input type="text" className="form-control" id="telefoneUnidade" placeholder={telefone} required />
                                                                <div className="invalid-feedback">
                                                                    Your username is required.
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-3">
                                                            <label for="text" className="form-label">CEP</label>
                                                            <input type="text" className="form-control" id="CEP" placeholder="" />
                                                            <div className="invalid-feedback">
                                                                Please enter a valid email address for shipping updates.
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label for="enderecoUnidade" className="form-label">Endereço</label>
                                                            <input type="text" className="form-control" id="enderecoUnidade" placeholder={endereco} />
                                                            <div className="invalid-feedback">
                                                                Please enter a valid email address for shipping updates.
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label for="email" className="form-label">Email</label>
                                                            <input type="email" className="form-control" id="emailUnidade" placeholder={mail} />
                                                            <div className="invalid-feedback">
                                                                Please enter a valid email address for shipping updates.
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-15">
                                                            <label for="exampleFormControlTextarea1" className="form-label" >Descrição</label>
                                                            <textarea class="form-control" id="descricaoUnidade" rows="3" ></textarea>
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

                                       

                                                </form>
                                            </div>
                                        </div>
                                    </form>

                                </main>



                            </div>
                        </div>

                        <div className="modal-footer">
                        <button type="button" class="btn btn-primary" >Enviar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

async function alterarRegistro(registro, nome) {
    const API_URL = `http://localhost:3001/${nome}/${registro}`;
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return alert(data.resultado);
    // console.log(data.Pessoas);
}


export default Modal;