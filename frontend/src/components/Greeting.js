import React from "react";

const Greeting = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.clear();
    setUser(null)
  };

  return (
    <div>
      <h1>hello {user.username}</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Greeting;
