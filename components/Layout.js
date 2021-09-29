export default function Layout({ children }) {
  return (
    <div className="border container mx-auto">
      <header id="color-primary" className="text-center my-5 h-20 bg-blue-600 ">
        <h1 className="text-blue-200">M10</h1>
      </header>
      <main>{children}</main>
      <footer className="bg-blue-600 text-center text-blue-200">
        <h2>
          Copyrigth 2020 - Melhor Celular - Todos os direitos reservados à
          Melhor Celular LTDA
        </h2>
      </footer>
    </div>
  );
}
