import "./Separator.scss";

export default function SectionSeparator({ className, text, author }) {
  return (
    <section className={`container-fluid separator ${className}`}>
      <div className="row separator__container align-items-center">
        <figure className="col black-filter">
          <blockquote className="display-5 fw-bold">"{text}"</blockquote>
          <figcaption className="fs-4">{author}</figcaption>
        </figure>
      </div>
    </section>
  );
}
