import React from "react";
// import '../ui/components/App/App.css'

export default function App() {
  const A = (e)=>{
    e.preventDefault()
    location.href='/login'
  }
  const B = (e)=>{
    e.preventDefault()
    location.href='/registro'
  }
  return (
    <div className="app">    
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">GitClass</h1>
          <div>
            <button onClick={A} className="login-btn">Fazer Login</button>
            <button onClick={B} className="signup-btn">Cadastre-se</button>
          </div>
        </nav>
        {/* Hero Section */}
        <header className="hero">
          <div className="hero-text">
            <p className="welcome-text">Seja bem-vindo!</p>
            <h2 className="hero-title">Código, Organização e Produtividade em um Só Lugar</h2>
            <p className="hero-description">
              Conecte seu aprendizado ao GitHub de forma intuitiva. Nossa plataforma integra código, organização e
              colaboração para que seus projetos acadêmicos sejam mais eficientes e menos estressantes.
            </p>
          </div>
          <img
            src="/hero-image.jpg"
            alt="Pessoa programando"
            className="hero-image"
          />
        </header>
        {/* Funcionalidades */}
        <section className="features">
          <h3 className="section-title">Principais funcionalidades</h3>
          <div className="feature-cards">
            <div className="feature-card">
              <h4>Integração GitHub + Grafana</h4>
              <p>Gerenciar, monitorar e visualizar o progresso de projetos e tarefas de forma centralizada.</p>
            </div>
            <div className="feature-card">
              <h4>Gerenciamento Simplificado</h4>
              <p>Acompanhe tarefas e commits sem trocar de plataforma.</p>
            </div>
            <div className="feature-card">
              <h4>Atualizações em Tempo Real</h4>
              <p>Veja mudanças e progresso sem precisar atualizar a página.</p>
            </div>
          </div>
        </section>
        {/* Benefícios */}
        <section className="benefits">
          <h3 className="section-title">Por Que Usar Nossa Plataforma?</h3>
          <div className="benefits-content">
            <ul className="benefits-list">
              <li>✅ Menos trocas de plataforma, mais produtividade.</li>
              <li>✅ Professores e alunos acompanham projetos com clareza.</li>
              <li>✅ Redução de erros e retrabalho com atualizações automáticas.</li>
              <li>✅ Todos os envolvidos têm uma visão clara das tarefas e entregas.</li>
              <li>✅ Facilidade para visualizar progresso e pendências.</li>
            </ul>
            <img
              src="/octocat.png"
              alt="Mascote do GitHub"
              className="benefits-image"
            />
          </div>
        </section>
        {/* CTA */}
        <section className="cta">
          <h3 className="cta-title">Simplifique sua rotina. Comece agora!</h3>
          <button className="cta-button">BORA LÁ →</button>
        </section>
        {/* Footer */}
        <footer className="footer">
          <p>© 2025 GitClass. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#">Sobre nós</a>
            <a href="#">Suporte</a>
            <a href="#">Perguntas frequentes</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
          <div className="footer-contact">📧 gitclass@gmail.com</div>
        </footer>
      </div>
    </div>
  )
}