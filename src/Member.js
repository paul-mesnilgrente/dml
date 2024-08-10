import { useState } from "react";

export default function Member({
  normalImagePath,
  funnyImagePath,
  name,
  description,
}) {
  const [funny, setFunny] = useState(false);

  const switchImage = () => {
    setFunny(!funny);
  };

  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <div className="card h-100">
            <img
              src={normalImagePath}
              onClick={switchImage}
              className="card-img-top"
              alt={name}
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>

        <div className="flip-card__back">
          <div className="card h-100">
            <img
              src={funnyImagePath}
              onClick={switchImage}
              className="card-img-top"
              alt={name}
            />
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
