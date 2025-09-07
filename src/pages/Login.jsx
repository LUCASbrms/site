import api from "../services/api";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, senha });
      console.log("Login OK:", res.data);
      localStorage.setItem("token", res.data.token); // salva token para manter logado
    } catch (err) {
      console.error("Erro no login", err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit">Entrar</button>

      <p>
        Não tem uma conta?{" "}
        <Link to="/cadastro">Cadastre-se aqui</Link>
      </p>
      
    </form>
  );
}