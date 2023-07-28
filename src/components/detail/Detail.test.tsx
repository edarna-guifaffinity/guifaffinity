import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { Detail } from "./Detail";
import { server } from "../../mocks/server";
import { Gif } from "../../domain/models/gif.model";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    gifId: "mygifId",
  }),
}));

test("Se muestra Detalle del Gif", async () => {
  const gif: Gif = {
    id: "UX5ZG1rFUkjVsjVW4W",
    src: "https://media1.giphy.com/media/UX5ZG1rFUkjVsjVW4W/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
    title: "La Dodgers Reaction GIF",
    tags: [
      "#sports",
      "#reaction",
      "#sport",
      "#baseball",
      "#mlb",
      "#clap",
      "#major league baseball",
      "#dodgers",
      "#la dodgers",
      "#uppercut",
      "#mlb 2020",
      "#regular season 20",
      "#2020 mlb",
      "#2020 mlb regular season",
      "#mlb regular season 2020",
      "#20 regular season",
      "#2020 regular season",
      "#major league baseball 2020",
      "#regular season 2020",
      "#graterol",
      "#brusdar",
      "#major baseball league",
    ],
    user: {
      avatar: "https://media4.giphy.com/avatars/kylesauer/Dy4l4EFEBKLT.gif",
      name: "Kyle Sauer",
    },
  };
  server.use(
    rest.get("http://localhost:3000/api/gifs/mygifId", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(gif));
    })
  );

  render(<Detail />);
  expect(
    await screen.findByText("La Dodgers Reaction GIF")
  ).toBeInTheDocument();
  expect(await screen.findByText("by Kyle Sauer")).toBeInTheDocument();
  expect(await screen.findByText("Kyle Sauer")).toBeInTheDocument();
  expect(await screen.findByAltText("Kyle Sauer")).toBeInTheDocument();
  expect(await screen.findByAltText("La Dodgers Reaction GIF")).toBeVisible();
  expect(await screen.findByText("#sports")).toBeInTheDocument();
});

test("Se muestra un gif sin autor", async () => {
  const gif: Gif = {
    id: "YleuWir5NTNVXkflSp",
    src: "https://media3.giphy.com/media/J6OQEgOUNOU5BWfjFj/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
    title: "Movie Brazil GIF by MOODMAN",
    tags: ["#movie", "#brazil", "#brazil the movie"],
    user: {
      avatar: "",
      name: "",
    },
  };

  server.use(
    rest.get("http://localhost:3000/api/gifs/mygifId", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(gif));
    })
  );

  render(<Detail />);

  expect(await screen.findByText("by unknown")).toBeInTheDocument();
  expect(await screen.findByText("unknown")).toBeInTheDocument();
  expect(await screen.findByAltText("unknown")).toBeInTheDocument();
});
