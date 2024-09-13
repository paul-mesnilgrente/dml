import { Collapse } from "bootstrap";
import { useRef } from "preact/hooks";
import Logo from "./assets/images/logo_dans_ma_librairie.png";

function Navbar() {
  const navRef = useRef(null);
  const handleClick = () => {
    const bsCollapse = Collapse.getOrCreateInstance(navRef.current);
    bsCollapse.toggle();
  };

  const links = ["Rayons", "Histoire", "Équipe", "Contact", "Partenaires"];

  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#root">
          <img src={Logo} alt="Bootstrap" width="30" height="24" /> Dans ma
          librairie
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#global-nav"
          aria-controls="global-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          ref={navRef}
          id="global-nav"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {links.map((link) => (
              <li key={link} className="nav-item">
                <a
                  onClick={handleClick}
                  className="nav-link"
                  href={`#${link
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/\p{Diacritic}/gu, "")}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
