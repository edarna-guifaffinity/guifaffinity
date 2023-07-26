import { GifRepositoryImpl } from "../../infrastructure/GifRepository";
import { Gif } from "../models/gif.model";

const getGifs = (): Promise<Gif[]> => {
  return GifRepositoryImpl.getGifs();
};

const getGifsDetail = (gifId: string): Promise<Gif> => {
  return GifRepositoryImpl.getGifDetail(gifId);
};

export const gifService = {
  getGifs,
  getGifsDetail,
};
