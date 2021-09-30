export default function Layout({ children }) {
  return (
    <div className="border container mx-auto">
      <header id="color-primary" className="text-center my-5 h-16">
        <h1 id="color-text" className="text-blue-200">
          M10
        </h1>
      </header>
      <main>{children}</main>
      <footer
        id="color-primary"
        className="text-center text-blue-200 text-xs p-2 h-16 flex items-center justify-center"
      >
        <h2 id="color-text" className="">
          Copyrigth 2020 - Melhor Celular - Todos os direitos reservados à
          Melhor Celular LTDA
        </h2>
      </footer>
    </div>
  );
}
