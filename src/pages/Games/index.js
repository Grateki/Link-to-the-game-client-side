import React, { useState, useEffect } from "react";
import "./games.scss";
import { Link } from "react-router-dom";
import { makeRequest } from "../../services/axios";

export default function Games() {
  const [allGames, setAllGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(3);

  useEffect(() => {
    makeRequest.get("Game/getallgames").then((response) => {
      setAllGames(response.data);
    });
  }, []);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="list-of-posts">
      <h2>Jogos</h2>
      <ul>
        {currentGames.map((game) => (
          <li key={game.id}>
            <h2>{game.gameName}</h2>
            <p className="author">Categoria: {game.category}</p>
            <p>Descrição: {game.description} </p>
            <Link
              className="btn-post"
              to={`/postgame/${game.id}`}
              type="submit"
            >
              Atualizar Jogo
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {[...Array(Math.ceil(allGames.length / gamesPerPage)).keys()].map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber + 1)}
              className={`page-link ${
                currentPage === pageNumber + 1 ? "active" : ""
              }`}
            >
              {pageNumber + 1}
            </button>
          )
        )}
      </div>
      <Link className="btn-post" to="/postgame/0" type="submit">
        Incluir novo jogo
      </Link>
    </div>
  );
}
