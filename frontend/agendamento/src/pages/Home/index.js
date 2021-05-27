import './styles.css';

function Home() {
  return (
    <>
      <main className="home">
        <div class="container py-4">
          <header class="pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">            
              <a class="navbar-brand text-dark" href="/" > <img src="./ico/first-aid.svg" className="bi  mx-5" width="40" height="40" title="Ramais" alt="phone"></img>Agendamento Online</a>
            </a>
          </header>


          <div class="row align-items-md-stretch">
            <div class="col-md-6 ">
              <div class="h-100 p-5  prod  rounded-3">
                <h2>Ambiente de Produção</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                <a class="btn btn-outline-dark" href="/production" type="button">Abrir</a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 dev border rounded-3">
                <h2>Ambiente de Desenvolvimento</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                <a class="btn btn-outline-dark" href="/production" type="button">Abrir</a>
              </div>
            </div>
          </div>

          <div class="p-5 mt-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-10 fw-bold">Repositorio do Projeto</h1>
              <p class="col-md-15 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
              <button class="btn btn-primary btn-lg" type="button">Detalhes</button>
            </div>
          </div>




          <div class="pt-3 mt-4 text-muted border-top"> </div>
          
    
        </div>
      </main>
    </>
  );
}

export default Home;
