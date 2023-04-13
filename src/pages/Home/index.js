import React, { useState, useEffect } from "react";
import Posts from "../../components/Posts";
import Games from "../Games";
import Profile from "../Profile";

import Loading from "../../components/Loading";
import "./styles.scss";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="home">
      <div className="content">
        <Profile />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flexHome">
            <Games />
            <Posts />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
