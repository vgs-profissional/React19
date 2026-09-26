import './cards-tema.estilo.css'

export function CardEvento({ evento }) {
    return (
        <article className="evento-card">
            <header className='cabecalho-card'>
                <img src={evento.capa} alt={evento.titulo} />
            </header>
            <div className=''>
                <p className='card-tag'>{evento.tema.nome}</p>
                <p className='card-horario'>{evento.data.toLocaleString('pt-BR')}</p>
                <h4 className='card-titulo'>
                    {evento.titulo}
                </h4>
                <footer className='rodape-card'>
                    <p>{evento.descricao}</p>
                </footer>
            </div>
        </article>
    )
}