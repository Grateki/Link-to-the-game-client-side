import React, { useState, useEffect } from "react";
import "./posts.scss";
import { Link } from "react-router-dom";
import { makeRequest } from "../../services/axios";

export default function Posts() {
  const [post, setAllPosts] = useState([]);
  const [commentCount, setCommentCount] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    makeRequest.get("/Post/getallposts").then((response) => {
      setAllPosts(response.data);
      const commentCounts = {};
      response.data.forEach((post) => {
        commentCounts[post.id] = post.comments.length;
      });
      setCommentCount(commentCounts);
    });
  }, []);
  const indexOfLastGame = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastGame - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastGame);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="list-of-posts">
      <h2>Posts</h2>
      <ul>
        {currentPosts.map((posts) => (
          <li key={posts.id}>
            <h2> {posts.title}</h2>
            <p>{posts.postText}</p>
            <p className="author">Por: {posts.userName}</p>
            <p>{commentCount[posts.id]} comentários</p>
            <Link
              className="btn-post"
              to={`/viewpost/${posts.id}`}
              type="submit"
            >
              Ver postagem
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {[...Array(Math.ceil(post.length / postsPerPage)).keys()].map(
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
      <Link className="btn-post" to="/post/0" type="submit">
        Criar postagem
      </Link>
    </div>
  );
}
