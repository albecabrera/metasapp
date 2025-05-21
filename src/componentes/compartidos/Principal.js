function Principal({ children }) {
    return (
    <>
    <sidenav>
        <a href="/lista">Lista</a>
        <a href="/crear">crear</a>
    </sidenav>
    <main>
     {children}
    </main>
    </>
  );
}

export default Principal;
