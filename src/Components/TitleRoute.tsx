import React from 'react'

const style : React.CSSProperties = {
   padding: "var(--gap)", 
   margin: "var(--gap)",
   borderRadius: "var(--gap)",
   color: "var(--color-4)",
   backgroundColor: "var(--color-3)"
}

const TitleRoute = () => {
  return (
    <h1 style={style}>Resumo</h1>
  )
}

export default TitleRoute