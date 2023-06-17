import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { Detail } from "./Detail";
import { server } from "../../mocks/server";
import { Gif } from "../../models/gif.model";

test("Se muestra Detalle del Gif", async () => {
  const gif: Gif = {
    id: "UX5ZG1rFUkjVsjVW4W",
    src: "https://media1.giphy.com/media/UX5ZG1rFUkjVsjVW4W/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif",
    title: "La Dodgers Reaction GIF by MLB",
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
    rest.get("http://localhost:3000/gif", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(gif));
    })
  );
  render(<Detail />);
  expect(
    await screen.findByText("La Dodgers Reaction GIF by MLB")
  ).toBeInTheDocument();
  expect(await screen.findByText("by Kyle Sauer")).toBeInTheDocument();
  expect(await screen.findByText("Kyle Sauer")).toBeInTheDocument();
  expect(
    await screen.findByAltText("La Dodgers Reaction GIF by MLB")
  ).toBeVisible();
  expect(await screen.findByText("#sports")).toBeInTheDocument();
});
