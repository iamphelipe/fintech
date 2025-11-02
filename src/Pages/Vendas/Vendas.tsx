import { NavLink } from 'react-router-dom'
import { useData } from '../../Context/useContext'
import "./Vendas.css"

const Vendas = () => {

  const {data} = useData()
  if(!data) return null

  return (
    <div>
      {data.map((d) => (
        <NavLink to={`/venda/${d.id}`}>
          <div className="venda-box">
            <p style={{ fontFamily: 'monospace' }}>{d.id}</p>
            <p>{d.nome}</p>
            <p className="dataPrice">
              {d.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Vendas