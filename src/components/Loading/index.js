import React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Carregando...</p>
    </div>
  );
};

export default Loading;
