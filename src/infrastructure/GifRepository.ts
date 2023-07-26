import { GifRepository } from "../domain/repositories/GifRepository";
import { Gif } from "../models/gif.model";

export const GifRepositoryImpl: GifRepository = {
  getGifDetail: async (gifId: string) => {
    const response = await fetch(`http://localhost:3000/api/gifs/${gifId}`);
    const res = await response.json();
    return res as Gif;
  },
  getGifs: async () => {
    const response = await fetch("http://localhost:3000/api/gifs");
    const res = await response.json();
    return res as Gif[];
  },
};
