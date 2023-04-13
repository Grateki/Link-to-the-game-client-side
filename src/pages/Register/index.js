import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { api } from "../../services/axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    rePassWord: "",
  });
  const [err, setErr] = useState(null);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await api.post("/singup", inputs, axiosConfig);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>LINK TO THE GAME</h1>
          <p>
            A melhor rede social para quem gosta de boardgames! Quer acessar
            nosso conteúdo? basta realizar seu cadastro!
          </p>
          <span>tem conta?</span>
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Cadastre-se</h1>
          <form>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirme a senha"
              name="rePassWord"
              onChange={handleChange}
            />
            <button onClick={handleClick}>Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
