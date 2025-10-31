import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Resumo from "./Pages/Resumo/Resumo"
import Vendas from "./Pages/Vendas/Vendas"
import "./App.css"
import { ContextoProvider } from "./Context/useContext"

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
              </Routes>
            </main>
          </div>
        </div>
      </ContextoProvider>
    </>
  );
}

export default App
