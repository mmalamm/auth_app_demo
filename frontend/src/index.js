import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { getToken } from "./token.js";

import AuthForm from "./components/AuthForm";
import Greeting from "./components/Greeting";

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};

    fetch("/api/auth/me", {
      headers,
    })
      .then((d) => d.json())
      .then((u) => {
        console.log(u);
        if (u.user) setUser(u.user);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? <Greeting /> : <AuthForm />}
    </UserContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
