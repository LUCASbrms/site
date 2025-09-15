import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
<div className="home-page">
      <header className="hero-header">
        <div className="container">
          <h1 className="brand">IA via WhatsApp</h1>
          <nav className="nav">
            <Link to="/login" className="nav-link">Entrar</Link>
            <Link to="/cadastro" className="nav-cta">Cadastre-se</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-left">
            <h2 className="hero-title">
              Transforme seu WhatsApp em um assistente
            </h2>
            <p className="hero-sub">
              Receba transcrições automáticas de áudios em português e inglês,
              gere imagens a partir de texto e agende compromissos — tudo pelo
              seu WhatsApp, com integração simples e segura.
            </p>

            <div className="hero-actions">
              <Link to="/cadastro" className="cta-primary">Comece agora</Link>
              <Link to="/login" className="cta-outline">Já sou cliente</Link>
            </div>

            <ul className="hero-bullets">
              <li>Transcrição de áudio com tradução</li>
              <li>Geração de imagens por prompt</li>
              <li>Agendamentos com notificações personalizadas</li>
            </ul>
          </div>

          <div className="hero-right">
            {/* imagem ilustrativa (usar imagem real depois) */}
            <div className="phone-mock">
              <div className="phone-header">WhatsApp • Seu bot</div>
              <div className="phone-body">
                <div className="msg incoming">Enviar áudio para transcrever</div>
                <div className="msg outgoing">Transcrição em PT & EN pronta ✅</div>
              </div>
            </div>
          </div>
        </section>

        <section className="features container">
          <h3>O que a nossa IA faz por você</h3>
          <div className="feature-grid">
            <article className="feature">
              <h4>Transcrição & Tradução</h4>
              <p>
                Receba os áudios em texto em português e inglês — ideal para
                revisões rápidas e pesquisa de conteúdo sem precisar ouvir.
              </p>
            </article>

            <article className="feature">
              <h4>Geração de Imagens</h4>
              <p>
                Envie uma descrição e receba uma imagem coerente com o pedido —
                útil para marketing, design rápido e protótipos.
              </p>
            </article>

            <article className="feature">
              <h4>Agendamento Inteligente</h4>
              <p>
                Crie compromissos via texto ou voz, escolha como receber lembretes
                (texto, áudio ou chamada) e sincronize notificações.
              </p>
            </article>

            <article className="feature">
              <h4>Privacidade & Segurança</h4>
              <p>
                Conexão segura, armazenamento em bases confiáveis (Postgres/Redis)
                e controle total do usuário sobre seus dados.
              </p>
            </article>
          </div>
        </section>


        <section className="how container">
          <h3>Como funciona</h3>
          <ol className="steps">
            <li>
              <strong> Cadastre-se e assine:</strong> pague via Stripe e ganhe
              acesso ao bot privado no WhatsApp.
            </li>
            <li>
              <strong> Conecte seu número:</strong> nós provisionamos um chat
              particular com o seu bot (via Baileys).
            </li>
            <li>
              <strong> Use quando quiser:</strong> envie áudios, mensagens
              ou prompts de imagem — nossa IA (OpenAI) responde em segundos.
            </li>
          </ol>
        </section>

        <section className="pricing container">
          <div className="pricing-card">
            <h4>Plano Mensal</h4>
            <p className="price">R$ 29,90 / mês</p>
            <ul>
              <li>Transcrições ilimitadas</li>
              <li>Geração de imagens</li>
              <li>Agendamentos e lembretes</li>
              <li>Suporte via chat</li>
            </ul>
            <Link to="/compra" className="botao-verde">
              Comece já — Assinar
            </Link>

          </div>

          <div className="pricing-note">
            <h5>Dúvidas?</h5>
            <p>
              Entre em contato ou veja o FAQ. Implementamos free-trial e opções
              corporativas para times.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} IA Interativa via WhatsApp — Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
