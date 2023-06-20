import "./HomeList.css";
import { FC, useEffect, useState } from "react";
import { Gif } from "../../models/gif.model";
import { Link } from "react-router-dom";

export const HomeList: FC = () => {
  const [gifs, setGifs] = useState<Gif[] | undefined>(undefined);

  useEffect(() => {
    const loadGifs = async () => {
      const response = await fetch("http://localhost:3000/api/gifs");
      const res = await response.json();
      console.log(res);
      setGifs(res);
    };
    loadGifs();
  }, []);

  if (gifs === undefined) {
    return <div>cargando ...</div>;
  }

  return (
    <section className="gifs">
      {gifs.map((gif) => (
        <Link to={`gif/${gif.id}`}>
          <img className="imgList" alt={gif.title} src={gif.src} />
        </Link>
      ))}
    </section>
  );
};
