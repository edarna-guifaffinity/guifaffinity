import { FC, useEffect, useState } from "react";
import "./Detail.css";
import { Gif } from "../../models/gif.model";
import { Tag } from "../tag/Tag";

export const Detail: FC = () => {
  const [gif, setGif] = useState<Gif | undefined>(undefined);

  useEffect(() => {
    const loadGif = async () => {
      const response = await fetch("http://localhost:3000/gifs/1");
      const res = await response.json();
      setGif(res);
    };
    loadGif();
  }, []);

  if (gif === undefined) {
    return <div>cargando ...</div>;
  }
  let username = gif.user.name;
  if (username === "") {
    username = "unknown";
  }

  return (
    <div className="detail-container">
      <div className="title-container">
        <span className="title-container_title">{gif.title}</span>
        <span className="title-container_author"> by {username}</span>
      </div>
      <div className="gif-container">
        <div className="gif-container_img-wrapper">
          <img src={gif.src} alt={gif.title} />
        </div>
        <div className="gif-container_information">
          <div className="gif-container_information_author">
            <span>{username}</span>
          </div>
          <div className="gif-container_information_tags">
            <Tag tagName={gif.tags[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};
