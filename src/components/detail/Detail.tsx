import { useEffect, useState } from "react";
import "./Detail.css";
import { Gif } from "../../models/gifs.model";

export const Detail = () => {
  const [gif, setGif] = useState<Gif | undefined>(undefined);

  useEffect(() => {
    const loadGif = async () => {
      const response = await fetch("http://localhost:3000/gifs/1");
      const res = await response.json();
      console.log(res);
      setGif(res);
    };
    loadGif();
  }, []);

  if (gif === undefined) {
    return <div>cargando ...</div>;
  }

  return (
    <div className="detail-container">
      <div className="title-container">
        <span className="title-container_title">titulo 2</span>
        <span className="title-container_author"> by Pep</span>
      </div>
      <div className="gif-container">
        <div className="gif-container_img-wrapper">
          <img
            src="https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif"
            alt="texto alternativo de la imagen"
          />
        </div>
        <div className="gif-container_information">
          <div className="gif-container_information_author"></div>
          <div className="gif-container_information_tags"></div>
        </div>
      </div>
    </div>
  );
};
