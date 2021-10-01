import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '../lib/api';

const colors = {
  BLACK: 'Preto',
  WHITE: 'Branco',
  GOLD: 'Dourado',
  PINK: 'Rosa',
};

export default function ListCell() {
  const [lista, setLista] = useState();

  useEffect(() => {
    api.get('/phone').then((response) => {
      setLista(
        response.data.map((item) => ({
          // eslint-disable-next-line no-underscore-dangle
          id: item._id,
          code: item.code,
          model: item.model,
          price: item.price,
          brand: item.brand,
          color: item.color,
        }))
      );
    });
  }, []);

  const excluirCadastro = (selecionado) => {
    api.delete(`/phone/${selecionado}`).then(() => {
      const novaLista = lista.filter((item) => item.id !== selecionado);
      setLista(novaLista);
    });
  };

  return (
    <div className="flex flex-col container px-4 md:px-28">
      <header className="flex justify-between items-center font-semibold mb-2 text-lg">
        <div>
          <h1>Produtos</h1>
        </div>
        <Link href="/addCell">
          <div>
            <button
              id="color-button"
              className="flex bg-blue-200 rounded px-2 py-1"
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
        <thead>
          <tr className="border rounded-t-md flex flex-col md:grid md:grid-cols-6 text-xs md:text-sm pl-4 space-y-2 md:space-y-0">
            <td className="col-span-1">Codigo</td>
            <td className="col-span-1">Modelo</td>
            <td className="col-span-1">Preço</td>
            <td className="col-span-1">Marca</td>
            <td className="col-span-1">Cor</td>
          </tr>
        </thead>
        <tbody>
          {lista?.map((item) => (
            <tr
              key={item.id}
              className="border flex flex-col md:grid md:grid-cols-6 text-xs md:text-sm pl-4 py-1 space-y-2 md:space-y-0"
            >
              <td className="col-span-1 ">{item.code}</td>
              <td className="col-span-1  ">{item.model}</td>
              <td className="col-span-1  ">{item.price}</td>
              <td className="col-span-1 ">{item.brand}</td>
              <td className="col-span-1 ">{colors[item.color]}</td>

              <td className="col-span-1 flex justify-end space-x-4 px-4">
                <Link href={`/${item.id}/update`}>
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
                </Link>
                <button onClick={() => excluirCadastro(item.id)} type="button">
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
