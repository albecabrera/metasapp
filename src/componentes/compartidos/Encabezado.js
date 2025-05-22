import './Encabezado.css';
function Encabezado() {
  return (
    <header className="Encabezado">
      <div className="titulo">
        Encabezado
        <svg xmlns="http://www.w3.org/2000/svg" className="logo">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          <path fillRule="evenodd" d="M12.395 2" />
        </svg>
        <a href="/">Metas App</a>
      </div>
      <nav>
        <a href="/perfil">Perfil</a>
      </nav>
    </header>
  );
}

export default Encabezado;
