import './App.css'

function FormularioDeEvento() {
  return (
    <form className='formulario-evento' action="">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="nome">
          Qual o nome do evento?
        </label>
        <input type="text" id="nome" />
      </fieldset>
    </form>
  )
}

function App() {

  return (
    <main>
      <header>
        <img src="./public/logo.png" alt="" />
      </header>
      <section>
        <img src="./public/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
