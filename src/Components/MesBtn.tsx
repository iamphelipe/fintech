import type React from "react";
import { useData } from "../Context/useContext";

const style: React.CSSProperties = {
   textTransform: "capitalize",
   padding: "var(--gap)",
   backgroundColor: "var(--color-3)",
   border: "none",
   borderRadius: "var(--gap)",
   color: "var(--color-4)",
   fontWeight: "600",
   display: "flex",
   justifyContent: "center",
   flex: "1",
   cursor: "pointer"
}

function getMonth(n: number) {
  const data = new Date();
  data.setMonth(data.getMonth() + n);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(data);
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0")
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const yyyy = date.getFullYear()

  return `${yyyy}-${mm}-${dd}`
  
}

const MesBtn = ({ n }: { n: number }) => { 

  const {setInicio, setFinal} = useData()

  function setMes(n : number) {
    const date = new Date()
    date.setMonth(date.getMonth() + n)
    
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

    setInicio(formatDate(firstDay))
    setFinal(formatDate(lastDay))

  }

  return (
      <button onClick={() => setMes(n)} style={style}>{getMonth(n)}</button>
  );
};

export default MesBtn;
