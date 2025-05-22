function Vinculo({ children, texto, href  }) {
  return (
    <a href={href} className="Vinculo">
      {children}
    </a>
  );
}
export default Vinculo;
//