export default function Layout({ children }) {
  return (
    <div className="border">
      <header>
        <h1>M10</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h2>
          Copyrigth 2020 - Melhor Celular - Todos os direitos reservados à
          Melhor Celular LTDA
        </h2>
      </footer>
    </div>
  );
}
