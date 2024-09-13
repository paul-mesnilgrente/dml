export default function History() {
  const events = [
    { date: "-9000 avant J.-C.", description: "Découverte de l'écriture" },
    { date: "1454", description: "Invention de l'imprimerie par Gutenberg" },
    { date: "1997", description: 'Création de "BD Bulle"' },
    { date: "2007", description: "Nouveau rayon jeunesse" },
    { date: "2009", description: 'Changement de nom "Dans ma librairie"' },
    { date: "2021", description: "Rachat par Grégory et Julie" },
    { date: "2023", description: "Agrandissement du rayon manga" },
  ];
  return (
    <section className="container" id="histoire">
      <h1>Notre histoire</h1>

      <ol className="list-group mt-3">
        {events.map((event) => (
          <li
            key={event.description}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{event.date}</div>
              {event.description}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
