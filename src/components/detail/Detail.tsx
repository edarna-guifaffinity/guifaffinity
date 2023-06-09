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
    <>
      <p>titulo 2</p>
      <p>Pep</p>
      <img
        src="https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif"
        alt="texto alternativo de la imagen"
      />
    </>
  );
};
