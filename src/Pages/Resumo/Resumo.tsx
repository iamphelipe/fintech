
import Loading from '../../Components/Loading'
import StatusVenda from '../../Components/StatusVenda'
import { useData } from '../../Context/useContext'

const Resumo = () => {

  const {loading} = useData()

  if(loading) return <Loading />

  return (
    <>
    <StatusVenda />
    </>
  )
}

export default Resumo