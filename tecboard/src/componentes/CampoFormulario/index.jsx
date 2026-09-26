import './campo-formulario.estilo.css'
export function CampoFormulario({ children }) {
    return (<fieldset className='formulario'>{children}</fieldset>)
}