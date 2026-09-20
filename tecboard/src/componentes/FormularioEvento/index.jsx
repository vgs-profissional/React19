import { CampoEntrada } from "../CampoEntrada";
import { CampoFormulario } from "../CampoFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botao";
import './formulario-de-eventos.estilo.css'

export function FormularioDeEvento() {
    return (
        <form className='formulario-evento' action="#">
            <TituloFormulario>
                Preencha para criar o evento:
            </TituloFormulario>
            <CampoFormulario>
                <div className="campos">
                    <Label htmlFor="nome">
                        Qual o nome do evento?
                    </Label>
                    <CampoEntrada
                        type="text"
                        id="nome"
                        placeholder='Summer dev hits'
                        name='nomeFormulario' />
                    <Label htmlFor='data'>Data do evento</Label>
                    <CampoEntrada
                        type='date'
                        id='data'
                        placeholder='XX/XX/XXXX'
                        name='dataFormulario' />
                    <Label htmlFor='tema'>Tema do evento</Label>
                    <CampoEntrada
                        type='select'
                        id='tema'
                        placeholder='Seleciona uma opção'
                        name='temaFormulario' />
                </div>
                <ul className="lista" hidden>
                    <li className="item-lista">tema1</li>
                    <li className="item-lista">tema2</li>
                    <li className="item-lista">tema3</li>
                    <li className="item-lista">tema4</li>
                </ul>
                <Botao
                    type='submit'
                    id='botaoCriar'
                    placeholder='Criar evento'
                    value='Criar evento' />
            </CampoFormulario>
        </form >
    )
}