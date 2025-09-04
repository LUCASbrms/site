import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecuperarSenha.css';

function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Se um usuário com este e-mail existir, um link de recuperação foi enviado.');
  };

  return (
    <div className="recuperar-container">
      <h2>Recuperar Senha</h2>
      <p>Digite seu e-mail e enviaremos um link para você redefinir sua senha.</p>
      <form className="recuperar-form" onSubmit={handleSubmit}>
        <input
          className="recuperar-input"
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="recuperar-button" type="submit">Enviar link de recuperação</button>
      </form>
      {message && <p className="message">{message}</p>}
      <br />
      <Link to="/login" className="app-link">Voltar para o Login</Link>
    </div>
  );
}

export default RecuperarSenha;