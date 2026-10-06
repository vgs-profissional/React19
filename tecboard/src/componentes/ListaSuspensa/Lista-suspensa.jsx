import './Lista-suspensa.estilo.css'

export function ListaSuspensa({ temas, ...rest }) {
    return (
        <select {...rest} className='selecao-tema' defaultValue=''>
            <option value="" disabled >Selecione uma opção</option>
            {temas.map(function (item) {
                return (
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                )
            })}
        </select>
    )
}