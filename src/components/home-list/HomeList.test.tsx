import { rest } from "msw";
import { server } from "../../mocks/server";
import { Gif } from "../../models/gif.model";
import { HomeList } from "./HomeList";
import { render, screen } from "@testing-library/react";

test("se muestra un gif", async () => {
  // crear un gif con texto alternativo "anAlternativeText"
  const gifs: Gif[] = [
    {
      anAlternativeText: "texto alternativo de la imagen",
      src: "srcGif1",
      tags: []
    },
  ];
  //mockeamos la llamada para que nos devuelva un array con este gif solamente
  server.use(
    rest.get("http://localhost:3000/gifs", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(gifs));
    })
  );
  render(<HomeList />);

  //expect(await screen.findByText('firstGif')).toBeInTheDocument();
  // Vamos a buscar la imagen por el texto alternativo
  expect(
    await screen.findByAltText("texto alternativo de la imagen")
  ).toBeVisible();
  // vamos a ver que la imagen sea visible en el navegador
});
