export default function History() {
  return (
    <section className="container" id="historique">
      <h1>Notre histoire</h1>

      <ol className="list-group mt-3">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">-9000 avant J.-C.</div>
            Découverte de l'écriture
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">1454</div>
            Invention de l'imprimerie par Gutenberg
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">1982</div>
            Création de "BD Bulle"
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">2011</div>
            Changement de nom "Dans ma librairie"
          </div>
        </li>
      </ol>
    </section>
  );
}
