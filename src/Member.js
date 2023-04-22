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
    <div className="card member">
      <div className="flix-box">
        <div className="flix-inner">
          <img
            src={normalImagePath}
            onClick={switchImage}
            className="card-img-top flip-box-front"
            alt={name}
          />
          {/* <img
            src={funnyImagePath}
            onClick={switchImage}
            className="card-img-top flip-box-back"
            alt={name}
          /> */}
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
