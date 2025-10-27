import React from 'react'
import Input from './Input'
import { useData } from '../Context/useContext'

const style: React.CSSProperties = {
  display: 'flex',
  gap: "var(--gap)"
}

const Header = () => {

    const {inicio,final,setInicio,setFinal} = useData()
    
  return (
      <form>
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
      </form>
  );
}

export default Header