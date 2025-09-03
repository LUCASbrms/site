import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css'; 

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    alert(`Cadastro realizado!\nNome: ${nome}\nEmail: ${email}`);
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro</h1>
      <form className="cadastro-form" onSubmit={handleCadastro}>
        <input
          className="cadastro-input"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          className="cadastro-input"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="cadastro-input"
          type="password"
          placeholder="Crie uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button className="cadastro-button" type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem conta? <Link to="/login" className="app-link">Fazer login</Link>
      </p>
    </div>
  );
}

export default Cadastro;

