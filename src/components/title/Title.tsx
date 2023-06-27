import { FC } from "react";
import "./Title.css";
import logo from "./../../assets/images/Logo.png";

export const Title: FC = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <h1 className="title">GUIFAFFINITY</h1>
    </header>
  );
};
