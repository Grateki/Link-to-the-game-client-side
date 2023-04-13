import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { makeRequest } from "../../services/axios";

export default function Profile() {
  const { userId } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await makeRequest.get(`User/getuserbyid/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}
