import './styles.css';

function NavbarDev() {


    return (
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Agendamento</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample09">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Página inicial</a>
                        </li>                                            
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Aplicativos</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown09">
                                <li><a class="dropdown-item" href="/novo-agendamento-development">Novo Agendamentos</a></li>                              
                                <li><a class="dropdown-item" href="/nova-Unidade-development">Cadastrar Nova Unidades</a></li>
                               
                            </ul>
                        </li>
                       
                        
                    </ul>
                    <form>
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavbarDev;
