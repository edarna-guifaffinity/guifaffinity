import { FC } from "react";
import "./Searcher.css";
import searcherLogo from "./../../assets/images/Lupa.png";

export const Searcher: FC = () => {
  return (
    <div>
      <input placeholder="¿Qué quieres buscar? ¡Encuéntralo!" />
      <button>
        <img src={searcherLogo} alt="" />
      </button>
    </div>
  );
};
