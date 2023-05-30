import { rest } from "msw";

export const handlers = [
  // Handles a GET /gifs request
  rest.get("https://miapi.com/gifs", (req, res, ctx) => {
    const gifs = [
      {
        title: "firstGif",
        autor: "autor1",
        src: "srcGif1",
        tags: ["firstTag", "secondTag"],
        likes: 20,
      },
      {
        title: "secondGif",
        autor: "autor1",
        src: "srcGif2",
        tags: ["firstTag", "secondTag"],
        likes: 10,
      },
      {
        title: "thirdGif",
        autor: "autor2",
        src: "srcGif3",
        tags: ["secondTag"],
        likes: 2,
      },
    ];

    return res(ctx.status(200), ctx.json(gifs));
  }),
];
