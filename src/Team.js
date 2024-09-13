import Member from "./Member";

import Gregory from "./images/portraits/gregory.jpg";
import GregoryFun from "./images/portraits/gregory_fun.jpg";
import Julie from "./images/portraits/julie.jpg";
import JulieFun from "./images/portraits/julie_fun.jpg";
import Violene from "./images/portraits/violene.jpg";
import VioleneFun from "./images/portraits/violene_fun.jpg";
import Maeva from "./images/portraits/maeva.jpg";
import MaevaFun from "./images/portraits/maeva_fun.jpg";

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
