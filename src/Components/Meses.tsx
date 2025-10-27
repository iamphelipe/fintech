import MesBtn from './MesBtn'

const Meses = () => {
  return (
    <div style={{display: "flex", gap: "1rem"}}>
      <MesBtn n={-3}/>
      <MesBtn n={-2}/>
      <MesBtn n={-1}/>
      <MesBtn n={0}/>
    </div>
  )
}

export default Meses