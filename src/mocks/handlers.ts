import {
  DefaultBodyType,
  MockedRequest,
  PathParams,
  ResponseComposition,
  RestContext,
  RestHandler,
  RestRequest,
  rest,
} from "msw";
import { Gif } from "../models/gif.model";

export const gif: Gif = {
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

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get(
    "http://localhost:3000/gifs",
    (
      req: RestRequest<never, PathParams<string>>,
      res: ResponseComposition<DefaultBodyType>,
      ctx: RestContext
    ) => {
      const gifs: Gif[] = Array(20).fill(gif);
      return res(ctx.status(200), ctx.json(gifs));
    }
  ),
  rest.get(
    "http://localhost:3000/gifs/1",
    (
      req: RestRequest<never, PathParams<string>>,
      res: ResponseComposition<DefaultBodyType>,
      ctx: RestContext
    ) => {
      return res(ctx.status(200), ctx.json(gif));
    }
  ),
];
