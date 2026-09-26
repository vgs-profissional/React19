import './App.css'
import { Banner } from './componentes/banner'
import { FormularioDeEvento } from './componentes/FormularioEvento'
import { Tema } from './componentes/Tema'

//#region 
//Componentes são funções
// function TituloFormulario(props) {
//   return (<h2>{props.children}</h2>)
// }
// //destructuring sendo usado no lugar de props.coisa
// function CampoFormulario({ children }) {
//   return (<fieldset>{children}</fieldset>)
// }
// // Também poderia ser (props) e chamava como props.htmlFor
// function Label({ children, htmlFor }) {
//   return (<label htmlFor={htmlFor}>{children}</label>)
// }
// // O parametro já pega todos as props da tag e basta usar o spread (...)
// function CampoEntrada(props) {
//   return <input {...props} />
// }
//#endregion

//#region teste
// function Teste() {
//   let tres = 3
//   if (tres == 3) {
//     return (<h1>Três é igual a 3</h1>)
//   } else {
//     return (<h1>Três não é igual a 3</h1>)
//   }
// }
//#endregion

// Chamada final, chame todos os componentes de sessão aqui
function App() {
  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'backend'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]
  return (
    <main>
      <header>
        <img src="./public/logo.png" alt="Logo da tecboard" />
      </header>
      <Banner />
      <FormularioDeEvento />
      <section className='secao-titulo'>
        <Tema tema={temas[0]} />
      </section>
      <section className='secao-titulo'>
        <Tema tema={temas[1]} />
      </section>
      <section className='secao-titulo'>
        <Tema tema={temas[2]} />
      </section>
      <section className='secao-titulo'>
        <Tema tema={temas[3]} />
      </section>
      <section className='secao-titulo'>
        <Tema tema={temas[4]} />
      </section>
      <section className='secao-titulo'>
        <Tema tema={temas[0]} />
      </section>
      {/* <Teste /> */}
    </main>
  )
}

export default App
