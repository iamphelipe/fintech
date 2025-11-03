import './Loading.css'

const Loading = () => {
  return (
    <div className="loader-wrap">
      <div className="spinner" role="status" aria-label="Carregando"></div>
      <div className="loader-text">Carregando...</div>
    </div>
  );
}

export default Loading