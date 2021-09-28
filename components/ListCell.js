import Link from 'next/link';

export default function ListCell() {
  return (
    <div>
      <header>
        <div>
          <h1>Produtos</h1>
        </div>
        <Link href="/addCell">
          <div>
            <button type="button">+ Adicionar</button>
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
                <button type="button">Editar</button>
              </td>
            </Link>
            <td>
              <button type="button">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
