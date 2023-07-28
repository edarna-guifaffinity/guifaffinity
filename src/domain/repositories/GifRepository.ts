import { Gif } from "../models/gif.model";

export interface GifRepository {
  getGifs: () => Promise<Gif[]>;
  getGifDetail: (gifId: string) => Promise<Gif>;
}
