import CanalBDImage from "./images/supporters/canal_bd.png";

export default function CanalBD() {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h1>Nos livres sur CanalBD</h1>

          <ul className="fs-4 list-unstyled">
            <li>Commandez en ligne et:</li>
            <li>Récuperez vos livres en librairie ou</li>
            <li>La librairie vous les expédie</li>
          </ul>
        </div>

        <div className="col-12 col-md-6 text-center">
          <a
            href="https://www.canalbd.net/dans-ma-librairie"
            target="_blank"
            rel="noreferrer"
            alt="Dans ma librairie sur CanalBD"
          >
            <img src={CanalBDImage} alt="CanalBD" />
          </a>
        </div>
      </div>
    </section>
  );
}
