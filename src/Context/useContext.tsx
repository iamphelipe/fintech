import React from "react";
import useFetch from "../Hook/useFetch";
import type { VendaUser } from "../Model/VendaUser";

interface IContexto {
   data: VendaUser[] | null;
   loading: boolean;
   error: Error | null;
   inicio: string;
   setInicio: React.Dispatch<React.SetStateAction<string>>;
   final: string;
   setFinal: React.Dispatch<React.SetStateAction<string>>;
}

const Contexto = React.createContext<IContexto | null>(null)

export const useData = () => {
  const context = React.useContext(Contexto)
  if (!context) {
    throw new Error('Contexto tem que estar dentro do Provider')
  }
  return context;
};

function getDay(n: number) {
  const date = new Date();

  if (n > 0) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  } else {
    date.setDate(date.getDate() - 30);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }
}

export const ContextoProvider = ({children} : React.PropsWithChildren) => {
  
   const [inicio, setInicio] = React.useState(getDay(0))
   const [final, setFinal] = React.useState(getDay(1))

   const {data, loading, error} = useFetch<VendaUser[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)

   return (
     <Contexto.Provider
       value={{ data, loading, error, inicio, setInicio, final, setFinal }}
     >
       {children}
     </Contexto.Provider>
   );
}