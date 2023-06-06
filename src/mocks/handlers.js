import { rest } from "msw";

export const handlers = [
  // Handles a GET /gifs request
  rest.get("http://localhost:3000/gifs", (req, res, ctx) => {
    const gifs = [
      {
        anAlternativeText: "texto alternativo de la imagen 6",
        src: "https://giphy.com/embed/B2vBunhgt9Pc4",
      },
      {
        anAlternativeText: "texto alternativo de la imagen 2",
        src: "srcGif2",
      },
      {
        anAlternativeText: "texto alternativo de la imagen",
        src: "srcGif3",
      },
    ];

    return res(ctx.status(200), ctx.json(gifs));
  }),
];
