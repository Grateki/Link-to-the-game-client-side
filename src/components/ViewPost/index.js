import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { makeRequest } from "../../services/axios";
import "./viewPost.scss";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { UserContext } from "../../context/UserContext";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

export default function Post() {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { userId } = useContext(UserContext);

  useEffect(() => {
    makeRequest.get(`/Post/getpostbyid/${id}`).then((response) => {
      setPost(response.data);
      setIsLoading(false);
    });
  }, [id]);

  const handleDeletePost = () => {
    makeRequest
      .delete(`/Post/deletepost/${id}/${userId}`)
      .then(() => {
        window.location.href = "/home";
      })
      .catch((error) => {
        console.log("Erro ao excluir post:", error.message);
        alert("Não foi possível excluir o post. Tente novamente mais tarde.");
      });
  };
  console.log(userId, post.userId);

  return (
    <div className="container">
      <div className="social-media">
        {isLoading ? (
          <Loading />
        ) : post ? (
          <div className="post">
            <h2>{post.title}</h2>
            <p className="post-text">{post.postText}</p>
            <div className="post-author-info">
              <p className="author-name">Por: {post.userName}</p>
              <p className="post-date">
                Postado em: {new Date(post.createdAt).toLocaleString()}
              </p>

              <button onClick={handleDeletePost}>Excluir post</button>
            </div>
            <p>{post.comments?.length} comentários</p>
            <ul className="comments-list">
              {post.comments?.map((comment) => (
                <li className="comment" key={comment.id}>
                  <p className="comment-text">{comment.message}</p>
                  <div className="comment-author-info">
                    <p className="author-name">Por: {comment.userId}</p>
                    <p className="comment-date">
                      Comentado em:{" "}
                      {new Date(comment.postedAt).toLocaleString()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Não foi possível carregar o post.</p>
        )}
        <Link className="backlink" to="/home">
          <KeyboardReturnOutlinedIcon size="large" />
          Retornar
        </Link>
      </div>
    </div>
  );
}
