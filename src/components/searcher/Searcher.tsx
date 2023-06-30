import { FC } from "react";
import "./Searcher.css";
import searcherLogo from "./../../assets/images/Lupa.png";

export const Searcher: FC = () => {
  return (
    <div className="searcher">
      <input
        className="searcher_input"
        placeholder="¿Qué quieres buscar? ¡Encuéntralo!"
      />
      <button className="searcher_button">
        <img src={searcherLogo} alt="" />
      </button>
    </div>
  );
};
