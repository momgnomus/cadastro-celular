import Link from 'next/link';

export default function Register() {
  return (
    <div>
      <header>
        <h1>Detalhes do produto</h1>
      </header>
      <form>
        <div>
          <label htmlFor="">Modelo</label>
          <input
            className="border"
            type="text"
            name=""
            id=""
            placeholder="XT2041-1"
          />
        </div>
        <div>
          <label htmlFor="">Marca</label>
          <input
            className="border"
            type="text"
            name=""
            id=""
            placeholder="Motorola"
          />
        </div>
        <div>
          <label htmlFor="">Cor</label>
          <select className="border" name="" id="">
            <option value="">Preto</option>
            <option value="">Branco</option>
            <option value="">Azul</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Preço</label>
          <input
            className="border"
            type="number"
            name=""
            id=""
            placeholder="1.400,00"
          />
        </div>
        <div>
          <label htmlFor="">Inicio das vendas</label>
          <input
            className="border"
            type="date"
            name=""
            id=""
            placeholder="15/03/2020"
          />
        </div>
        <div>
          <label htmlFor="">Fim das vendas</label>
          <input
            className="border"
            type="date"
            name=""
            id=""
            placeholder="14/06/2020"
          />
        </div>

        <Link href="/">
          <button className="border" type="button">
            Voltar
          </button>
        </Link>
        <button className="border" type="button">
          Salvar
        </button>
      </form>
    </div>
  );
}
