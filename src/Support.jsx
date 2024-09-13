import LogoSection from "./LogoSection";

import CanalBD from "./assets/images/supporters/canal_bd.png";
import LibrairieSorciere from "./assets/images/supporters/librairie_sorciere.jpg";
import LabelLIR from "./assets/images/supporters/label_lir.jpg";
import LINA from "./assets/images/supporters/lina.jpg";
import EcoleDesLoisirs from "./assets/images/supporters/ecole_des_loisirs.jpg";

export default function Support() {
  const supporters = [
    {
      name: "CanalBD",
      href: "https://www.canalbd.net/dans-ma-librairie",
      image_src: CanalBD,
    },
    {
      name: "Librairie Sorcière",
      href: "https://www.librairies-sorcieres.fr/les-librairies/",
      image_src: LibrairieSorciere,
    },
    {
      name: "LINA",
      href: "https://www.librairies-nouvelleaquitaine.com/",
      image_src: LINA,
    },
    {
      name: "Label LIR",
      href: "https://livre.ciclic.fr/actualites/label-lir-libraire-independante-de-reference-0",
      image_src: LabelLIR,
    },
    {
      name: "Librairie référente de l'école des loisirs",
      href: "https://www.ecoledesloisirs.fr",
      image_src: EcoleDesLoisirs,
    },
  ];

  return (
    <LogoSection
      title='"Dans ma librairie" membre des réseaux'
      logos={supporters}
    />
  );
}
