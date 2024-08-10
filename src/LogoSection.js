export default function LogoSection({ title, logos, ...props }) {
  return (
    <section className="container" {...props}>
      <h1 className="mb-4">{title}</h1>
      <div className="row justify-content-evenly align-items-center">
        {logos.map((logo) => {
          const linkProps = {
            href: logo.href,
            target: "_blank",
            rel: "noreferrer",
          };
          const Elem = logo.href === undefined ? "div" : "a";
          const elemProps = logo.href === undefined ? {} : linkProps;

          return (
            <Elem
              key={logo.name}
              {...elemProps}
              className="col-4 col-md-2 mb-2"
            >
              <img className="img-fluid" src={logo.image_src} alt={logo.name} />
            </Elem>
          );
        })}
      </div>
    </section>
  );
}
