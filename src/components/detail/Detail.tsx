import { FC, useEffect, useState } from "react";
import "./Detail.css";
import { Gif } from "../../models/gif.model";
import { Tag } from "../tag/Tag";
import { useParams } from "react-router-dom";

export const Detail: FC = () => {
  const [gif, setGif] = useState<Gif | undefined>(undefined);
  let { gifId } = useParams();
  useEffect(() => {
    console.log(gifId);
    if (!gifId) {
      return;
    }
    const loadGif = async () => {
      const response = await fetch(`http://localhost:3000/api/gifs/${gifId}`);
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
        <div>
          <img className="gif-container_img" src={gif.src} alt={gif.title} />
        </div>
        <div className="gif-container_information">
          <div className="gif-container_information_author">
            <img
              className="gif-container_information_author_avatar"
              src={gif.user.avatar}
              alt={username}
            />
            <span>{username}</span>
          </div>
          <div className="gif-container_information_tags">
            {gif.tags.map((tag) => {
              return <Tag key={tag} tagName={tag} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
