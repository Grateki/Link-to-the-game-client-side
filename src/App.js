import React from "react";
import "./global.scss";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreatePost from "./components/CreatePost";
import PostGames from "./components/PostGames";
import ViewPost from "./components/ViewPost";

export default function App() {
  return (
    <div>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post/:userId" element={<CreatePost />} />
          <Route path="/postgame/:id" element={<PostGames />} />
          <Route path="/viewpost/:id" element={<ViewPost />} />
        </Routes>
      </UserProvider>
    </div>
  );
}
