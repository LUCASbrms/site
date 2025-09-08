import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault();
    console.log("cadastro", { nome, email, senha });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleCadastro}>
        <h1 className="auth-title">Crie sua conta 🚀</h1>
        <p className="auth-subtitle">Preencha os dados abaixo</p>

        <input
          className="auth-input"
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

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

        <button className="auth-button" type="submit">Cadastrar</button>

        <p className="auth-link">
          Já tem conta? <Link to="/login">Faça login</Link>
        </p>
      </form>
    </div>
  );
}
