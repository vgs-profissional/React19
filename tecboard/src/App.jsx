import './App.css'
import { FormularioDeEvento } from './componentes/FormularioEvento'

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
  return (
    <main>
      <header>
        <img src="./public/logo.png" alt="Logo da tecboard" />
      </header>
      <section>
        <img src="./public/banner.png" alt="Pessoa com óculos de realidade virtual" />
      </section>
      <FormularioDeEvento />
      {/* <Teste /> */}
    </main>
  )
}

export default App
