import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { getToken } from "./token.js";

import AuthForm from "./components/AuthForm";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((d) => d.json())
      .then((u) => {
        console.log(u);
        if (u) setUser(u);
      });
  }, []);

  return user ? <h1>hi {user.username}</h1> : <AuthForm setUser={setUser}/>;
};

ReactDOM.render(<App />, document.getElementById("root"));
