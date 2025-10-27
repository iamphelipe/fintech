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

export const ContextoProvider = ({children} : React.PropsWithChildren) => {
  
   const [inicio, setInicio] = React.useState("")
   const [final, setFinal] = React.useState("")

   const {data, loading, error} = useFetch<VendaUser[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)

   return (
     <Contexto.Provider
       value={{ data, loading, error, inicio, setInicio, final, setFinal }}
     >
       {children}
     </Contexto.Provider>
   );
}