import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { server } from "./mocks/server";
import { rest } from "msw";
import { SetupServer } from "msw/lib/node";

test("se muestra un gif", async () => {
  // crear un gif con texto alternativo "anAlternativeText"
  const gif = {
    title: "firstGif",
    anAlternativeText: "texto alternativo de la imagen",
    autor: "autor1",
    src: "srcGif1",
    tags: ["firstTag", "secondTag"],
    likes: 20,
  }
  //mockeamos la llamada para que nos devuelva un array con este gif solamente
  server.use(
    rest.get("http://localhost:3000/gifs", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json([gif]))
    })
  )
  render(<App />);

  //expect(await screen.findByText('firstGif')).toBeInTheDocument();
  // Vamos a buscar la imagen por el texto alternativo
  expect( await screen.findByAltText("texto alternativo de la imagen")).toBeVisible()
  // vamos a ver que la imagen sea visible en el navegador
});


