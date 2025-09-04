import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './ResetarSenha.css'; 

function ResetarSenha() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('As senhas não conferem!');
      return;
    }

    console.log("Enviando nova senha com o token:", token);

    setMessage('Senha alterada com sucesso! Redirecionando para o login...');
    setTimeout(() => navigate('/login'), 3000);
  };

  return (
    <div className="resetar-container">
      <h2>Crie uma nova senha</h2>
      <form className="resetar-form" onSubmit={handleSubmit}>
        <input
          className="resetar-input"
          type="password"
          placeholder="Nova senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="resetar-input"
          type="password"
          placeholder="Confirme a nova senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="resetar-button" type="submit">Redefinir Senha</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default ResetarSenha;