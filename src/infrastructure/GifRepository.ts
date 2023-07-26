import { GifRepository } from "../domain/repositories/GifRepository";
import { Gif } from "../models/gif.model";

const apiUrl = "http://localhost:3000/api";

export const GifRepositoryImpl: GifRepository = {
  getGifDetail: async (gifId: string) => {
    const response = await fetch(`${apiUrl}/gifs/${gifId}`);
    const res = await response.json();
    return res as Gif;
  },
  getGifs: async () => {
    const response = await fetch(apiUrl + "/gifs");
    const res = await response.json();
    return res as Gif[];
  },
};
