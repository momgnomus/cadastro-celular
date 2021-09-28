import Link from 'next/link';

export default function ListCell() {
  return (
    <div className="">
      <div className="col-start-2 col-span-4">
        <header>
          <div>
            <h1>Produtos</h1>
          </div>
          <Link href="/addCell">
            <div>
              <button
                className="flex bg-blue-200 rounded pl-3 pr-2 py-2"
                type="button"
              >
                +{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>{' '}
                Adicionar
              </button>
            </div>
          </Link>
        </header>
        <table>
          <thead className="border">
            <tr>
              <td>Codigo</td>
              <td>Modelo</td>
              <td>Preço</td>
              <td>Marca</td>
              <td>Cor</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23856234</td>
              <td>XT2041-1</td>
              <td>R$ 1.407,12</td>
              <td>Motorola</td>
              <td>Preto</td>
              <Link href="/addCell">
                <td>
                  <button type="button">
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </td>
              </Link>
              <td>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
