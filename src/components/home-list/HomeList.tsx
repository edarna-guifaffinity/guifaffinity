import "./HomeList.css";
import { useEffect, useState } from "react";
import { Gif } from "../../models/gifs.model";

export const HomeList = () => {
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
    <div className="app-container">
      <section className="gifs">
        {gifs.map((gif) => (
          <img alt={gif.anAlternativeText} src={gif.src} />
        ))}
      </section>
    </div>
  );
};
