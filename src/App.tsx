import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { r } from "msw/lib/glossary-de6278a9";

export interface Gif {
  anAlternativeText: string;
  src: string;
}

function App() {
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
    //<p>{gifs[0].anAlternativeText}</p>
    <img alt={gifs[0].anAlternativeText} src={gifs[0].src}></img>
  );
}

export default App;
