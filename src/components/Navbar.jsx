export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">TechWave</a>
        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}
