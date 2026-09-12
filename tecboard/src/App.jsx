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

// function Teste() {
//   let tres = 3
//   if (tres == 3) {
//     return (<h1>Três é igual a 3</h1>)
//   } else {
//     return (<h1>Três não é igual a 3</h1>)
//   }
// }

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
      {/* <Teste /> */}
    </main>
  )
}

export default App
