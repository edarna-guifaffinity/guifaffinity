import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { Detail } from "./Detail";
import { server } from "../../mocks/server";
import { Gif } from "../../models/gifs.model";

test("Se muestra Detalle del Gif", async () => {
  const gif: Gif = {
    anAlternativeText: "texto alternativo de la imagen",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
    title: "titulo 2",
    author: "Pep",
    tags: ["banana"],
  };
  server.use(
    rest.get("http://localhost:3000/gif", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(gif));
    })
  );
  render(<Detail />);
  expect(await screen.findByText("titulo 2")).toBeInTheDocument();
  expect(await screen.findByText("by Pep")).toBeInTheDocument();
  expect(await screen.findByText("Pep")).toBeInTheDocument();
  expect(
    await screen.findByAltText("texto alternativo de la imagen")
  ).toBeVisible();
  expect(await screen.findByText("#banana")).toBeInTheDocument();
});

