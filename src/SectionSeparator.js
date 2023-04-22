export default function SectionSeparator({ className, text, author }) {
  return (
    <section className={`container-fluid section-separator ${className}`}>
      <div className={`row align-items-center`}>
        <figure className="col black-filter">
          <blockquote className="blockquoteote">"{text}"</blockquote>
          <figcaption>{author}</figcaption>
        </figure>
      </div>
    </section>
  );
}
