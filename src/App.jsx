import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>🏠 Bem-vindo ao projeto IA Interativa</h2>;
}

function Login() {
  return <h2>🔑 Página de Login</h2>;
}

function Cadastro() {
  return <h2>📝 Página de Cadastro</h2>;
}

function Dashboard() {
  return <h2>📊 Dashboard do Usuário</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#1e1e2f" }}>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
        <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
        <Link to="/cadastro" style={{ margin: "10px", color: "white" }}>Cadastro</Link>
        <Link to="/dashboard" style={{ margin: "10px", color: "white" }}>Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
