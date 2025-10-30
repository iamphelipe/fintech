import type React from 'react'
import MesBtn from './MesBtn'

const style: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  width: "200%",
  maxWidth: "1100px",  
  boxSizing: "border-box",
  marginLeft: "var(--gap)"
}


const Meses = () => {
  return (
    <div style={style}>
      <MesBtn n={-3}/>
      <MesBtn n={-2}/>
      <MesBtn n={-1}/>
      <MesBtn n={0}/>
    </div>
  )
}

export default Meses