export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen items-center container mx-auto">
      <div className="border flex-1">
        <header
          id="color-primary"
          className="text-center h-16 flex items-center justify-center mb-10"
        >
          <h1 id="color-text" className="text-blue-200 text-4xl">
            M
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </header>
        <main>{children}</main>
        <footer
          id="color-primary"
          className="text-center text-blue-200 text-xs p-2 h-16 flex items-center justify-center mt-20"
        >
          <h2 id="color-text" className="">
            &#169; Copyrigth 2020 - Melhor Celular - Todos os direitos
            reservados à Melhor Celular LTDA
          </h2>
        </footer>
      </div>
    </div>
  );
}
