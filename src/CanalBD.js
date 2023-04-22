import CanalBDImage from "./images/canal_bd.png";

export default function CanalBD() {
  return (
    <section className="container">
      <h1>Nos livres sur CanalBD</h1>

      <ul>
        <li>Aller sur CanalBD</li>
        <li>Sélectionnez vos livres</li>
        <li>La librairie vous livre</li>
      </ul>

      <div className="text-center">
        <a
          href="https://www.canalbd.net/dans-ma-librairie"
          alt="Dans ma librairie sur CanalBD"
        >
          <img src={CanalBDImage} alt="CanalBD" />
        </a>
      </div>
    </section>
  );
}
