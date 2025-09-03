import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home-page-links">
      <h1>Home</h1>
      <Link to="/login" className="home-link">Ir para Login</Link> <br />
      <Link to="/cadastro" className="home-link">Ir para Cadastro</Link>
    </div>
  );
}

export default Home;