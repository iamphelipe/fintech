import { useData } from "../Context/useContext";
import "./StatusVenda.css"

const StatusVenda = () => {

   const {data} = useData()
   if(!data) return null

  return (
    <div className="card-status-box">
      <div className="card-status">
        <h1>Vendas</h1>
        <p>
          {data
            .reduce((acc, prev) => {
              const total = prev.preco + acc;
              return total;
            }, 0)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
      <div className="card-status">
        <h1>Recebido</h1>
        <p>
          {data
            .filter((d) => d.status === 'pago')
            .reduce((acc, prev) => {
              const total = prev.preco + acc;
              return total;
            }, 0)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
      <div className="card-status">
        <h1>Processando</h1>
        <p>
          {data
            .filter((d) => d.status === 'processando')
            .reduce((acc, prev) => {
              const total = prev.preco + acc;
              return total;
            }, 0)
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>
    </div>
  );
}

export default StatusVenda