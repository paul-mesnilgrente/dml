import CanalBDImage from "./images/canal_bd.png";

export default function CanalBD() {
  return (
    <div className="container">
      <h1>Achetez nos livres sur CanalBD</h1>

      <div className="text-center">
        <a
          href="https://www.canalbd.net/dans-ma-librairie"
          alt="Dans ma librairie sur CanalBD"
        >
          <img src={CanalBDImage} alt="CanalBD" />
        </a>
      </div>
    </div>
  );
}
