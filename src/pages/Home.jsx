import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Projeto</h1>
      <p className="home-subtitle">Sua solução de IA interativa no WhatsApp</p>
      <div className="home-buttons">
        <Link className="home-btn" to="/login">Entrar</Link>
        <Link className="home-btn" to="/cadastro">Cadastrar</Link>
      </div>
    </div>
  );
}
