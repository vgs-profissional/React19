import { useState } from 'react'
import './App.css'
import { Banner } from './componentes/banner'
import { CardEvento } from './componentes/Cards'
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

  const [eventos, setEvento] = useState(
    [{
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front',
      // descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
    }]
  )

  function criarEvento(evento) {
    // eventos.push(evento)
    setEvento([...eventos, evento])
    console.log(eventos);
  }

  return (
    <main>
      <header>
        <img src="./public/logo.png" alt="Logo da tecboard" />
      </header>
      <Banner />
      {/* O primeiro tem o mesmo nome doq vai ta la no index, o segundo tem q ter o nome da lista aqui nesse arquivo */}
      <FormularioDeEvento temas={temas} aoSubmeter={criarEvento} />
      {/* Map retorna array alterada, passe item pra ele dar um indice pra cada */}
      <section className="container">
        {temas.map(function (tema) {
          if (!eventos.some(function (evento) {
            return evento.tema.id == tema.id
          })) {
            return null
          }
          return (
            // Aqui ele pegou as propriedades do objeto de cada item e exige que cada item seja unico
            <section key={tema.id} className='secao-titulo'>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos.filter(function (evento) {
                  return evento.tema.id == tema.id
                }).map(function (evento, indice) {
                  return <CardEvento evento={evento} key={indice} />
                }
                )}
              </div>
            </section>)
        })}
      </section>
    </main>
  )
}

export default App
