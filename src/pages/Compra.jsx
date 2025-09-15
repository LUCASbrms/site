import React from "react";
import "./Compra.css"; // estilos da página

export default function Compra() {
  return (
    <div>
      {/* Header */}
      <header className="checkout-header">
        Loja - Checkout
      </header>

      {/* Conteúdo */}
      <main className="checkout-main">
        <h2>Resumo da Compra</h2>
        <div className="produto">
          <img
            src="https://via.placeholder.com/80"
            alt="Produto"
          />
          <div className="produto-info">
            <h3>Nome do Produto</h3>
            <p>Descrição breve do produto</p>
          </div>
          <span className="produto-preco">R$ 29,90</span>
        </div>

        <h2>Dados de Pagamento</h2>
        <form className="checkout-form">
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Número do cartão" required />
          <div className="linha">
            <input type="text" placeholder="Validade (MM/AA)" required />
            <input type="text" placeholder="CVV" required />
          </div>
          <button type="submit">Finalizar Compra</button>
        </form>
      </main>

      {/* Footer */}
      <footer className="checkout-footer">
        &copy; 2025 Minha Loja - Todos os direitos reservados.
      </footer>
    </div>
  );
}
