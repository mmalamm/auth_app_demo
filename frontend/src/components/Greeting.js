import React, { useContext } from "react";
import { UserContext } from "..";

import Dashboard from './Dashboard'


const Greeting = () => {
  const {user, setUser} = useContext(UserContext)

  const handleLogout = () => {
    localStorage.clear();
    setUser(null)
  };

  return (
    <div>
      <h1>hello {user.username}</h1>
      <button onClick={handleLogout}>logout</button>
      <Dashboard />
    </div>
  );
};

export default Greeting;
