import './styles.css';

function Agendamento() {

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()


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
                                    <label for="firstName" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                    <div classNameN="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <label for="lastName" className="form-label">CPF</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
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
                                    <input type="date" name="bday" min="1000-01-01"
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
                                    <select className="form-select" id="country" required>
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


                            <button type="button" class="btn btn-primary">Enviar</button>
                            <button type="button" class="btn btn-secondary mx-2">Buscar</button>



                            {/* </form> */}
                        </div>
                    </div>
                </main>


            </div>

        </>
    );
}

export default Agendamento;
