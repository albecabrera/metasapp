function Encabezado() {
  return (
    <div className="bg-black h-xl">
      <div>
        Encabezamiento
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <path fillRule="evenodd" d="M12.395 2" />
        </svg>
        <a href="/">Metas App</a>
      </div>
      <nav>
        <a href="/perfil">Perfil</a>
      </nav>
    </div>
  );
}

export default Encabezamiento;
