import "./HomeList.css";
import { FC, useEffect, useState } from "react";
import { Gif } from "../../models/gif.model";
import { gifService } from "../../domain/services/GifService";

export const HomeList: FC = () => {
  const [gifs, setGifs] = useState<Gif[] | undefined>(undefined);

  useEffect(() => {
    const loadGifs = async () => {
      const gifs = await gifService.getGifs();
      setGifs(gifs);
    };
    loadGifs();
  }, []);

  if (gifs === undefined) {
    return <div>cargando ...</div>;
  }

  return (
    <section className="gifs">
      {gifs.map((gif) => (
        <a key={gif.id} href={`gif/${gif.id}`}>
          <img className="imgList" alt={gif.title} src={gif.src} />
        </a>
      ))}
    </section>
  );
};
