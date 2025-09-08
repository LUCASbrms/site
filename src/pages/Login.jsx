import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // teste rápido: console.log pra garantir que o submit acontece
    console.log("tentando logar", { email, senha });
    // aqui vai sua chamada api.post(...)
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h1 className="auth-title">Bem-vindo 👋</h1>
        <p className="auth-subtitle">Entre para continuar</p>

        <input
          className="auth-input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="auth-button" type="submit">Entrar</button>

        <p className="auth-link">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
}
