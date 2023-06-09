import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { Detail } from "./Detail";
import { server } from "../../mocks/server";
import { Gif } from "../../models/gifs.model";

test("Se muestra Detalle del Gif", async () => {
  const gif: Gif = {
    anAlternativeText: "texto alternativo de la imagen",
    src: "srcGif1",
    title: "titulo 2",
    author: "Pep",
  };
  server.use(
    rest.get("http://localhost:3000/gif", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(gif));
    })
  );
  render(<Detail />);
  expect(await screen.findByText("titulo 2")).toBeInTheDocument();
  expect(await screen.findAllByAltText("Pep")).toBeInTheDocument();
});
