import { setToken } from "../token";

export const loginUser = (username, password) => {
  return fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((d) => d.json())
    .then((r) => {
      const { user, token, error } = r;
      if (token) {
        setToken(token);
      }
      return { user, error };
    });
};

export const registerUser = (username, password) => {
  return fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((d) => d.json())
    .then((r) => {
      const { user, token, error } = r;
      if (token) {
        setToken(token);
      }
      return { user, error };
    });
};
