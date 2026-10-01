import { CampoEntrada } from "../CampoEntrada";
import { CampoFormulario } from "../CampoFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa/Lista-suspensa";
import './formulario-de-eventos.estilo.css'

export function FormularioDeEvento({ temas }) {
    function aoFormSubmetido(formData) {
        const evento =
        {
            // Pega dado do campo chamado capaEvento  
            capa: formData.get('capaEvento'),
            tema: temas.find(function (item) {
                return item.id == formData.get('tema')
                // Acha na lista de temas um item(obj) que tenha um id correspondente
                // se tiver ele pega o objeto e guarda no tema
            }),
            data: new Date(formData.get('dataEvento')),
            titulo: formData.get('nomeEvento')
        }
        console.log('Dados coletados: ', evento);
    }

    return (
        <form className='formulario-evento' action={aoFormSubmetido}>
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
                        name='nomeEvento'
                    // required
                    />
                    <Label>
                        Qual a URL da imagem de capa?
                    </Label>
                    <CampoEntrada
                        type='text'
                        id='capa'
                        name='capaEvento'
                        placeholder="http://..."
                    // required
                    />
                    <Label htmlFor='data'>Data do evento</Label>
                    <CampoEntrada
                        type='date'
                        id='data'
                        placeholder='XX/XX/XXXX'
                        name='dataEvento'
                    // required
                    />
                    <Label htmlFor='tema'>Tema do evento</Label>
                    <ListaSuspensa id='temaEvento' name='tema' temas={temas} />
                </div>
                <Botao>
                    Criar evento
                </Botao>
            </CampoFormulario>
        </form >
    )
}