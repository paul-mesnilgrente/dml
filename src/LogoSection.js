export default function LogoSection({ title, logos }) {
  return (
    <section className="container">
      <h1>{title}</h1>
      <div className="row justify-content-evenly">
        {logos.map((logo) => (
          <div className="col">
            <a href={logo.href}>
              <img className="img-fluid" src={logo.image_src} alt={logo.name} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
