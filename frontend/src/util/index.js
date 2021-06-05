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
      const { user, token } = r;
      setToken(token);
      return user;
    });
};
