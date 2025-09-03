import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>🔑 Login</h1>
      <form>
        <input type="email" placeholder="E-mail" /> <br />
        <input type="password" placeholder="Senha" /> <br />
        <button type="submit">Entrar</button>
      </form>
      <br />
      <Link to="/cadastro" className="app-link">Não tem conta? Cadastre-se</Link>
    </div>
  );
}

export default Login;
