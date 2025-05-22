function Encabezado() {
  return (
    <div className="h-xl flex justify-between shadow bg-white text-gray-700">
      <div className="flex items-center px-4 h-xl hover: bg-gray-200">
        Encabezado
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
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

export default Encabezado;
