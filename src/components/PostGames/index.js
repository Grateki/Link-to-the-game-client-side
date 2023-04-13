import React from "react";
import "./postGames.scss";
import { Link, useParams } from "react-router-dom";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

export default function PostGames() {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="content">
        <section className="post">
          <h2>{id === "0" ? "Incluir Novo Jogo" : "Atualizar jogo"}</h2>
          <input
            type="text"
            placeholder="Nome do Jogo"
            className="content"
          ></input>
          <br />
          <input type="text" placeholder="categoria" className="coment"></input>
          <textarea
            type="textarea"
            className="content-area"
            placeholder="Descrição"
          ></textarea>
          <button className="btn" type="submit">
            {" "}
            {id === "0" ? "Enviar novo jogo" : "Atualizar jogo"}
          </button>
        </section>
        <div>
          <Link className="backlink" to="/home">
            <KeyboardReturnOutlinedIcon size="large" />
            Retornar
          </Link>
        </div>
      </div>
    </div>
  );
}
