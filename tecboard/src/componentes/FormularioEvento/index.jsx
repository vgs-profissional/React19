import { CampoEntrada } from "../CampoEntrada";
import { CampoFormulario } from "../CampoFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botao";
import { Select } from "../ListaSuspensa/Lista-suspensa";
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
                        name='nomeFormulario'
                        required />
                    <Label htmlFor='data'>Data do evento</Label>
                    <CampoEntrada
                        type='date'
                        id='data'
                        placeholder='XX/XX/XXXX'
                        name='dataFormulario'
                        required
                    />
                    <Label htmlFor='selecaoTema'>Tema do evento</Label>
                    <Select id='selecaoTema' name='temaEvento' required>
                        <option value="#">Selecione uma opção</option>
                        <option value="ia">Ia</option>
                        <option value="front-end">Front-end</option>
                        <option value="backend">Backend</option>
                        <option value="devops">Devops</option>
                        <option value="data-science">Data Science</option>
                        <option value="cloud">Cloud</option>
                    </Select>
                </div>
                <Botao>
                    Criar evento
                </Botao>
            </CampoFormulario>
        </form >
    )
}