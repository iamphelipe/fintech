import configuracoes from "../assest/icons/configuracoes.svg"
import contato from "../assest/icons/contato.svg"
import resumo from "../assest/icons/resumo.svg"
import sair from "../assest/icons/sair.svg"
import vendas from "../assest/icons/vendas.svg"
import webhooks from "../assest/icons/webhooks.svg"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <nav>
        <div>
          <h1>Fintech</h1>
        </div>
        <div>
          <ul>
            <li>
              <img src={resumo} alt="Icone Resumo" />
              <NavLink to={'/'}>Resumo</NavLink>
            </li>
            <li>
              <img src={vendas} alt="Icone Vendas" />
              <NavLink to={'vendas'}>Vendas</NavLink>
            </li>
            <li>
              <img src={webhooks} alt="Icone Webhooks" />
              <a href="#">Webhooks</a>
            </li>
            <li>
              <img src={configuracoes} alt="Icone Configurações" />
              <a href="#">Configurações</a>
            </li>
            <li>
              <img src={contato} alt="Icone Contato" />
              <a href="#">Contato</a>
            </li>
            <li>
              <img src={sair} alt="Icone Sair" />
              <a href="#">Sair</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar