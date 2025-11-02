import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Resumo from "./Pages/Resumo/Resumo"
import Vendas from "./Pages/Vendas/Vendas"
import "./App.css"
import { ContextoProvider } from "./Context/useContext"
import Venda from "./Pages/Venda/Venda"

function App() {

  return (
    <>
      <ContextoProvider>
        <div className="container">
          <Sidebar />
          <div className="menu-box">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Resumo />} />
                <Route path="vendas" element={<Vendas />} />
                <Route path="venda/:id" element={<Venda />}/>
              </Routes>
            </main>
          </div>
        </div>
      </ContextoProvider>
    </>
  );
}

export default App
