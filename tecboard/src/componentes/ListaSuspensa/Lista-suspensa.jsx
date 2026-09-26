import './Lista-suspensa.estilo.css'

export function Select({ children }) {
    return <select className='selecao-tema'>
        {children}
    </select>
}