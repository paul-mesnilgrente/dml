import LogoSection from "./LogoSection";

import LogoCNL from "./assets/images/partners/logo_cnl.png";
import LogoRegion from "./assets/images/partners/logo_region.png";
import LogoPrefete from "./assets/images/partners/logo_prefete.png";
import LogoInitiative from "./assets/images/partners/logo_initiative.png";
import LogoADELC from "./assets/images/partners/logo_adelc.png";

export default function Partners() {
  const partners = [
    {
      name: "Logo du Centre National du Livre",
      href: "https://centrenationaldulivre.fr",
      image_src: LogoCNL,
    },
    {
      name: "Logo de la région Nouvelle-Aquitaine",
      href: "https://www.nouvelle-aquitaine.fr/",
      image_src: LogoRegion,
    },
    {
      name: "Logo préfète de la région Nouvelle-Aquitaine",
      href: "https://www.prefectures-regions.gouv.fr/nouvelle-aquitaine/Region-et-institutions/Organisation-administrative-de-la-region/La-Prefete-ses-missions/La-prefete-de-region-Nouvelle-Aquitaine",
      image_src: LogoPrefete,
    },
    {
      name: "Logo Initiative Lot-et-Garonne",
      href: "https://www.facebook.com/initiativelotetgaronne",
      image_src: LogoInitiative,
    },
    {
      name: "Logo de l'association pour le dévelopment de la librairie de création",
      href: "http://www.adelc.fr/",
      image_src: LogoADELC,
    },
  ];

  return (
    <LogoSection id="partenaires" title="Nos partenaires" logos={partners} />
  );
}
