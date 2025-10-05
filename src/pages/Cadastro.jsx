// No início do seu arquivo, importe o useState
import React, { useState } from 'react';

// Este é o seu componente de formulário
function FormularioDeCadastro() {
  // 1. Criar "estados" para guardar o valor do email e a mensagem de erro
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(''); // Começa vazio

  // Função para validar o formato do email (a mesma lógica Regex)
  const validarEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // 2. Função que é chamada quando o formulário é enviado
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Limpa o erro anterior
    setEmailError('');

    // 3. Executa a validação
    if (!validarEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return; // Para a execução se o email for inválido
    }

    // Se a validação passou, aqui você envia os dados para o backend
    console.log('Email é válido, enviando para o backend:', email);

    try {
      // Exemplo de como você chamaria sua API no backend
      const response = await fetch('http://localhost:3001/cadastro', { // Ajuste a URL da sua API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email /*, outros dados do form */ }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Se o backend retornar um erro (ex: email já existe), mostre aqui
        setEmailError(data.mensagem || 'Ocorreu um erro.');
      } else {
        // Sucesso!
        console.log('Cadastro realizado com sucesso!', data);
        // Você pode redirecionar o usuário ou limpar o formulário aqui
      }

    } catch (error) {
      setEmailError('Não foi possível conectar ao servidor.');
    }
  };

  // 4. Este é o seu JSX (o "HTML" do React)
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email} // O valor do input é controlado pelo estado 'email'
        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado a cada letra digitada
        required
      />
      {/* Exibe a mensagem de erro APENAS se emailError não estiver vazio */}
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioDeCadastro;