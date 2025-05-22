import './Principal.css';
import Vinculo from './Vinculo';
function Principal({ children }) {
    return (
    <div className="Principal">
    <aside className="aside">
        <a href="/lista">Lista</a>
        <a href="/crear">crear</a>
    </aside>
    <Vinculo />
    <main className="main">
     {children}
    </main>
    </div>
  );
}

export default Principal;
