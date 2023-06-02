import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

export interface Gif {
  anAlternativeText: string,
  src: string
}


function App() {

  const [gifs, setGifs] = useState<Gif[]>([])

  useEffect(() => {
    const loadGifs = async () =>{
      const response = await fetch('http://localhost:3000/gifs')
      const res = await response.json()

      setGifs(res)
    }
    loadGifs()
  }, [])

  return (
    <>
      <img alt={gifs[0].anAlternativeText} src=""></img>
    </>
  );
}

export default App;
