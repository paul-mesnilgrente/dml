import CanalBD from "./images/canal_bd.png";
import LibrairieSorciere from "./images/librairie_sorciere.png";
import LabelLIR from "./images/label_lir.jpg";
import LINA from "./images/lina.jpg";
import EcoleDesLoisirs from "./images/ecole_des_loisirs.jpg";

export default function Support() {
  return (
    <section className="container">
      <h1>Avec le soutien de</h1>
      <div className="row justify-content-evenly">
        <div className="col">
          <img className="img-fluid" src={CanalBD} alt="CanalBD" />
        </div>
        <div className="col">
          <img
            className="img-fluid"
            src={LibrairieSorciere}
            alt="Librairie Sorcière"
          />
        </div>
        <div className="col">
          <img className="img-fluid" src={LabelLIR} alt="Label LIR" />
        </div>
        <div className="col">
          <img className="img-fluid" src={LINA} alt="LINA" />
        </div>
        <div className="col">
          <img
            className="img-fluid"
            src={EcoleDesLoisirs}
            alt="Librairie référente de l'école des loisirs"
          />
        </div>
      </div>
    </section>
  );
}
