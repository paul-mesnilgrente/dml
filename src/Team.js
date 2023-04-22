import Member from "./Member";

export default function Team() {
  return (
    <section id="equipe" className="pb-5">
      <div className="container">
        <h1 className="pt-3">Équipe</h1>
        <div className="row">
          <div className="col">
            <Member
              normalImagePath="https://via.placeholder.com/300?text=Grégorie"
              funnyImagePath="https://via.placeholder.com/300?text=Funny Grégorie"
              name="Grégorie"
              description="PDG"
            />
          </div>
          <div className="col">
            <Member
              normalImagePath="https://via.placeholder.com/300?text=Julie"
              funnyImagePath="https://via.placeholder.com/300?text=Funny Julie"
              name="Julie"
              description="PDG en chef"
            />
          </div>
          <div className="col">
            <Member
              normalImagePath="https://via.placeholder.com/300?text=Violène"
              funnyImagePath="https://via.placeholder.com/300?text=Funny Violène"
              name="Violène"
              description="Employé en charge"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
