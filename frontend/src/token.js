export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return null;
  }
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
  return token;
};
