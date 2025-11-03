import React from 'react'
import { useLocation } from 'react-router-dom'

const style : React.CSSProperties = {
   padding: "var(--gap)", 
   margin: "var(--gap)",
   borderRadius: "var(--gap)",
   color: "var(--color-4)",
   backgroundColor: "var(--color-3)"
}

const TitleRoute = () => {

  const {pathname} = useLocation()

  return (
    <h1 style={style}>{pathname === "/" ? "Resumo" : "Vendas"}</h1>
  )
}

export default TitleRoute