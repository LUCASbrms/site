import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha/RecuperarSenha.jsx";
import ResetarSenha from "./pages/ResetarSenha/ResetarSenha";
import Login from "./pages/Login"; 
import Compra from "./pages/Compra";
import Pagamento from './Pagamento/Pagamento';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/resetar-senha/:token" element={<ResetarSenha />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compra" element={<Compra />} />

      </Routes>
    </Router>
  );
}

export default App;
