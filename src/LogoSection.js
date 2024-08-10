export default function LogoSection({ title, logos }) {
  return (
    <section className="container">
      <h1 className="mb-4">{title}</h1>
      <div className="row justify-content-evenly align-items-center">
        {logos.map((logo) => (
          <a href={logo.href} className="col-4 col-md-2 mb-2">
            <img className="img-fluid" src={logo.image_src} alt={logo.name} />
          </a>
        ))}
      </div>
    </section>
  );
}
