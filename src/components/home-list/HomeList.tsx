import "./HomeList.css";
import { FC, useEffect, useState } from "react";
import { Gif } from "../../models/gif.model";

export const HomeList: FC = () => {
  const [gifs, setGifs] = useState<Gif[] | undefined>(undefined);

  useEffect(() => {
    const loadGifs = async () => {
      const response = await fetch("http://localhost:3000/gifs");
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
        <img className="imgList" alt={gif.title} src={gif.src} />
      ))}
    </section>
  );
};
