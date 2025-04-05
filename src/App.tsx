import "./App.css";

import logoImg from "./assets/logo.png";

function App() {
  return (
    <div className="container">
      <img src={logoImg} alt="Logo frases" className="logo" />
      <h2 className="title">Categorias</h2>
      <section className="category-area">
        <button className="category-btn">Motivação</button>
        <button className="category-btn">Bem estar</button>
      </section>
      <button className="btn-frase">Gerar frases</button>
      <p className="textoFrase">Alguma frase vai vir aqui!</p>
    </div>
  );
}

export default App;
