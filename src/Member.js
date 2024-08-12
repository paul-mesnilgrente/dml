import classNames from "classnames";
import { useState } from "react";

export default function Member({
  normalImagePath,
  funnyImagePath,
  name,
  description,
}) {
  const [flipped, setFlipped] = useState(false);

  const switchFlipped = (e) => {
    e.preventDefault();

    setFlipped(!flipped);
  };

  return (
    <div
      role="button"
      onClick={switchFlipped}
      className={classNames("flip-card", { "flip-card--flipped": flipped })}
    >
      <div className="flip-card__inner">
        <div onClick={switchFlipped} className="flip-card__front">
          <div className="card h-100">
            <img src={normalImagePath} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>

        <div onClick={switchFlipped} className="flip-card__back">
          <div className="card h-100">
            <img src={funnyImagePath} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
