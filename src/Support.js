import LogoSection from "./LogoSection";

import CanalBD from "./images/supporters/canal_bd.png";
import LibrairieSorciere from "./images/supporters/librairie_sorciere.png";
import LabelLIR from "./images/supporters/label_lir.jpg";
import LINA from "./images/supporters/lina.jpg";
import EcoleDesLoisirs from "./images/supporters/ecole_des_loisirs.jpg";

export default function Support() {
  const supporters = [
    { name: "CanalBD", image_src: CanalBD },
    {
      name: "Librairie Sorcière",
      href: "https://www.librairies-sorcieres.fr/les-librairies/",
      image_src: LibrairieSorciere,
    },
    { name: "Label LIR", image_src: LabelLIR },
    { name: "LINA", image_src: LINA },
    {
      name: "Librairie référente de l'école des loisirs",
      image_src: EcoleDesLoisirs,
    },
  ];

  return <LogoSection title="Avec le soutien de" logos={supporters} />;
}
