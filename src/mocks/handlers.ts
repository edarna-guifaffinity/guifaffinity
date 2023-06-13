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
import { Gif } from "../models/gifs.model";

export const gifs: Gif[] = [
  {
    anAlternativeText: "texto alternativo de la imagen 1",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 2",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 3",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 4",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 5",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 6",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 7",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 8",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 9",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 10",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 11",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 12",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 13",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 14",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
  {
    anAlternativeText: "texto alternativo de la imagen 15",
    src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
  },
];

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get(
    "http://localhost:3000/gifs",
    (
      req: RestRequest<never, PathParams<string>>,
      res: ResponseComposition<DefaultBodyType>,
      ctx: RestContext
    ) => {
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
      const gif: Gif = {
        anAlternativeText: "texto alternativo de la imagen",
        src: "https://media.tenor.com/TpWjyNO6wz8AAAAi/banana-dance.gif",
        title: "titulo 2",
        author: "Pep",
        tags: ["banana"],
      };
      return res(ctx.status(200), ctx.json(gif));
    }
  ),
];
