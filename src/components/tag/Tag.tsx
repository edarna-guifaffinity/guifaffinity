import { FC } from "react";
import "./Tag.css";

export const Tag: FC<{ tagName: string }> = ({ tagName }) => {
  return <span className="tag">{tagName}</span>;
};
