import Member from "./Member";

import Gregory from "./assets/images/portraits/gregory.jpg";
import GregoryFun from "./assets/images/portraits/gregory_fun.jpg";
import Julie from "./assets/images/portraits/julie.jpg";
import JulieFun from "./assets/images/portraits/julie_fun.jpg";
import Violene from "./assets/images/portraits/violene.jpg";
import VioleneFun from "./assets/images/portraits/violene_fun.jpg";
import Maeva from "./assets/images/portraits/maeva.jpg";
import MaevaFun from "./assets/images/portraits/maeva_fun.jpg";

export default function Team() {
  return (
    <section id="equipe" className="pb-5">
      <div className="container">
        <h1 className="pt-3">Équipe</h1>
        <div className="flip-cards-container">
          <Member
            normalImagePath={Gregory}
            funnyImagePath={GregoryFun}
            name="Grégory"
            description="Boss"
          />
          <Member
            normalImagePath={Julie}
            funnyImagePath={JulieFun}
            name="Julie"
            description="Chef"
          />
          <Member
            normalImagePath={Violene}
            funnyImagePath={VioleneFun}
            name="Violène"
            description="Jeunesse"
          />
          <Member
            normalImagePath={Maeva}
            funnyImagePath={MaevaFun}
            name="Maéva"
            description="Manga"
          />
        </div>
      </div>
    </section>
  );
}
