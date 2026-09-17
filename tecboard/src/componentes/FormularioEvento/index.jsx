import { CampoEntrada } from "../CampoEntrada";
import { CampoFormulario } from "../CampoFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import './formulario-de-eventos.estilo.css'

export function FormularioDeEvento() {
    return (
        <form className='formulario-evento' action="">
            <TituloFormulario>
                Preencha para criar o evento:
            </TituloFormulario>
            <CampoFormulario>
                <Label htmlFor="nome">
                    Qual o nome do evento?
                </Label>
                <CampoEntrada
                    type="text" id="nome" placeholder='Summer dev hits' name='nomeFormulario' />
            </CampoFormulario>
        </form>
    )
}