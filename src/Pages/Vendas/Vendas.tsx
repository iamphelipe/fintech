import React from 'react'
import { useData } from '../../Context/useContext'
import "./Vendas.css"

const Vendas = () => {

  const {data} = useData()
  if(!data) return null

  return (
    <div>
      {data.map((d) => (
        <div className="venda-box">
          <p style={{fontFamily: "monospace"}}>{d.id}</p>
          <p>{d.nome}</p>
          <p>
            {d.preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Vendas