
import type React from 'react'
import GraficoVendas from '../../Components/GraficoVendas'
import Loading from '../../Components/Loading'
import StatusVenda from '../../Components/StatusVenda'
import { useData } from '../../Context/useContext'

const style: React.CSSProperties = {
  padding: "var(--gap)", 
  margin: "var(--gap)", 
  backgroundColor: "var(--color-2)", 
  borderRadius: "var(--gap)"
}

const Resumo = () => {

  const {loading} = useData()

  if(loading) return <Loading />

  return (
    <>
      <StatusVenda />
      <div style={style}>
        <GraficoVendas />
      </div>
    </>
  )
}

export default Resumo