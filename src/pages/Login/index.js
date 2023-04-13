import React, { useState, useContext } from "react";
import "./login.scss";
import { api, makeRequest } from "../../services/axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("email", email);
      localStorage.setItem("AcessToken", response.data.token);
      const userResponse = await makeRequest.get(
        `/User/getuserbyemail/${email}`
      );
      setUserId(userResponse.data.id);
      navigate("/home");
    } catch (error) {
      alert("O login falhou" + error);
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="logo"></div>
        <div className="non-logo">
          <h2>LINK TO THE GAME</h2>
          <form onSubmit={login} className="form">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn" type="submit">
              Login
            </button>
          </form>

          <Link to="/register">
            <p className="forgotten">Esqueceu seu login?</p>
          </Link>

          <p className="create-account">Crie sua conta &#8594;</p>
        </div>
      </div>
    </div>
  );
}
