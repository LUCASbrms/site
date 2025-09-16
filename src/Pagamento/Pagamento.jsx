// Crie este arquivo: /src/pages/Pagamento/Pagamento.jsx

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm.jsx';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function Pagamento() {
  const [clientSecret, setClientSecret] = useState("");

  // ==================================================================
  // TAREFA 1: "Busque o clientSecret do seu backend" ESTÁ AQUI DENTRO
  // ==================================================================
  useEffect(() => {
    // O hook useEffect executa o código aqui dentro...
    fetch("http://localhost:3000/stripe/create-payment-intent", { // ...o fetch faz a chamada para o backend...
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "exemplo-de-produto" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret)); // ...e o setClientSecret salva o que recebemos.
  }, []);
  // ==================================================================


  const appearance = { theme: 'stripe' };
  const options = { clientSecret, appearance };

  return (
    <div className="App">
      {clientSecret && (
        // ==================================================================
        // TAREFA 2: "Configure o Stripe Elements com esse clientSecret" ACONTECE AQUI
        // O <Elements> "envolve" tudo e usa o 'options' que contém o clientSecret.
        // ==================================================================
        <Elements options={options} stripe={stripePromise}>

          {/* =========================================================== */}
          {/* TAREFA 3: "Renderize o CheckoutForm" ACONTECE AQUI         */}
          {/* O <CheckoutForm /> é colocado aqui dentro.                  */}
          {/* =========================================================== */}
          <CheckoutForm />

        </Elements>
      )}
    </div>
  );
}