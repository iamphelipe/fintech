import { useParams } from 'react-router-dom'
import useFetch from '../../Hook/useFetch';
import type { VendaUser } from '../../Model/VendaUser';
import './Venda.css'

const Venda = () => {

  const {id} = useParams()
  console.log(id);
  
  const {data} = useFetch<VendaUser>(`https://data.origamid.dev/vendas/${id}`)
  if(!data) return null
  
  return (
    <div className='venda-id-box'>
      <p>ID: {data.id}</p>
      <p>Nome: {data.nome}</p>
      <p>Preço: {data.preco.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}</p>
      <p>Status: {data.status}</p>
      <p>Pagamento: {data.pagamento}</p>
    </div>
  )
}

export default Venda