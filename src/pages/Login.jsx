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
      <div>
  <Link to="/recuperar-senha" className="app-link" style={{ marginRight: '15px' }}>
    Esqueceu a senha?
  </Link>

  <Link to="/cadastro" className="app-link">
    Não tem conta? Cadastre-se
  </Link>
</div>
    </div>
  );
}

export default Login;
