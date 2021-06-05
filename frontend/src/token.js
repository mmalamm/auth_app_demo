export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
  return token;
};
