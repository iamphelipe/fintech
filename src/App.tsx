import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Resumo from "./Pages/Resumo/Resumo"
import Vendas from "./Pages/Vendas/Vendas"
import Footer from "./Components/Footer"
import "./App.css"
import { ContextoProvider } from "./Context/useContext"

function App() {

  return (
    <>
      <ContextoProvider>
        <div className="container">
          <div className="menu-box">
            <Sidebar />
            <Header />
            <h1>Resumo</h1>
          </div>
          <main>
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="vendas" element={<Vendas />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ContextoProvider>
    </>
  );
}

export default App
