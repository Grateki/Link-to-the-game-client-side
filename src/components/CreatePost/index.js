import React, { useState, useContext } from "react";
import { makeRequest } from "../../services/axios";
import { UserContext } from "../../context/UserContext";
import "./post.scss";
import { Link } from "react-router-dom";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

function CreatePost() {
  const { userId } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title,
      postText,
      userId,
    };

    try {
      await makeRequest.post("/Post/creatpost", data);
      alert("Post criado com sucesso!");
      setTitle("");
      setPostText("");
    } catch (error) {
      console.error(error);
      alert("Não foi possível criar o post. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="container">
      <div className="content">
        <section className="post">
          <h2>Nova postagem</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título"
              className="content"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <textarea
              placeholder="Conteúdo"
              className="coment"
              value={postText}
              onChange={(event) => setPostText(event.target.value)}
            />
            <button className="btn" type="submit">
              Criar Post
            </button>
          </form>
        </section>
        <Link className="backlink" to="/home">
          <KeyboardReturnOutlinedIcon size="large" />
          Retornar
        </Link>
      </div>
    </div>
  );
}

export default CreatePost;
