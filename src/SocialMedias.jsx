import FacebookWidget from "./FacebookWidget";

export default function SocialMedias() {
  return (
    <section className="container">
      <h1 className="mb-4">Retrouvez-nous sur les réseaux sociaux !</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <h2>Facebook</h2>
          <FacebookWidget />
        </div>
        <div className="col-12 col-md-6">
          <h2>Instagram</h2>
        </div>
      </div>
    </section>
  );
}
