import React from 'react'
import Input from './Input'
import { useData } from '../Context/useContext'
import Meses from './Meses'
import TitleRoute from './TitleRoute'

const style: React.CSSProperties = {
  display: 'flex',
  gap: "var(--gap)",
  backgroundColor: "var(--color-2)",
  color: "var(--color-4)",
  padding: "var(--gap)",
  margin: "var(--gap)",
  borderRadius: "var(--gap)"
}

const Header = () => {

    const {inicio,final,setInicio,setFinal} = useData()
    
  return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={style}>
          <Input
            label="Início"
            value={inicio}
            onChange={(e) => setInicio(e.target.value)}
          />
          <Input
            label="Final"
            value={final}
            onChange={(e) => setFinal(e.target.value)}
          />
        </div>
        <TitleRoute />
        <Meses />
      </form>
  );
}

export default Header