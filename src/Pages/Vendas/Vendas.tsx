import React from 'react'
import { useData } from '../../Context/useContext'

const Vendas = () => {

  const {data} = useData()
  if(!data) return null

  return (
    <div>
      
    </div>
  )
}

export default Vendas