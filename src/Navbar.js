import Logo from "./images/logo_dans_ma_librairie.png";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#root">
          <img src={Logo} alt="Bootstrap" width="30" height="24" /> Dans ma
          librairie
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#rayons">
                Rayons
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#histoire">
                Histoire
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#equipe">
                Équipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#partenaires">
                Partenaires
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
