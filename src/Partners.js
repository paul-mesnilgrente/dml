import LogoCNL from "./images/logo_cnl.png";
import LogoRegion from "./images/logo_region.png";
import LogoPrefete from "./images/logo_prefete.png";
import LogoInitiative from "./images/logo_initiative.png";
import LogoADELC from "./images/logo_adelc.png";

export default function Partners() {
  return (
    <section className="pb-5" id="partenaires">
      <div className="container">
        <h1 className="pt-3">Nos partenaires</h1>

        <div className="mt-5 row justify-content-evenly">
          <div className="col">
            <a href="https://centrenationaldulivre.fr">
              <img
                className="img-fluid"
                src={LogoCNL}
                alt="Logo du Centre National du Livre"
              />
            </a>
          </div>
          <div className="col">
            <a href="https://www.nouvelle-aquitaine.fr/">
              <img
                className="img-fluid"
                src={LogoRegion}
                alt="Logo de la région Nouvelle-Aquitaine"
              />
            </a>
          </div>
          <div className="col">
            <a href="https://www.prefectures-regions.gouv.fr/nouvelle-aquitaine/Region-et-institutions/Organisation-administrative-de-la-region/La-Prefete-ses-missions/La-prefete-de-region-Nouvelle-Aquitaine">
              <img
                className="img-fluid"
                src={LogoPrefete}
                alt="Logo préfète de la région Nouvelle-Aquitaine"
              />
            </a>
          </div>
          <div className="col">
            <a href="https://www.facebook.com/initiativelotetgaronne">
              <img src={LogoInitiative} alt="Logo Initiative Lot-et-Garonne" />
            </a>
          </div>
          <div className="col">
            <a href="http://www.adelc.fr/">
              <img
                className="img-fluid"
                src={LogoADELC}
                alt="Logo de l'association pour le dévelopment de la librairie de création"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
