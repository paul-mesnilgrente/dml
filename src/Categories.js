function Categories() {
  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <h1>Bande Dessinée</h1>
          <img
            className="img-fluid"
            src="https://via.placeholder.com/300?text=Rayons BD"
            alt="Rayons BD"
          />
        </div>
        <div className="col">
          <h1>Manga</h1>
          <img
            className="img-fluid"
            src="https://via.placeholder.com/300?text=Rayons manga"
            alt="Rayons manga"
          />
        </div>
        <div className="col">
          <h1>Jeunesse</h1>
          <img
            className="img-fluid"
            src="https://via.placeholder.com/300?text=Rayons Jeunesse"
            alt="Rayons Jeunesse"
          />
        </div>
        <div className="col">
          <h1>Autres</h1>
          <img
            className="img-fluid"
            src="https://via.placeholder.com/300?text=Autres rayons"
            alt="Autres rayons"
          />
        </div>
      </div>
    </section>
  );
}

export default Categories;
