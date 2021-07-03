import React, { useState } from "react";
import { loginUser } from "../util";

const LoginForm = ({ setUser, setFormType }) => {
  const [unameInput, setUnameInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const submitHandler = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    loginUser(unameInput, pwInput).then((result) => {
      const { user, error } = result;
      setIsLoading(false);
      if (error) {
        setError(error);
      }
      if (user) {
        setUser(user);
      }
    });
  };
  const unameChangeHandler = (evt) => {
    evt.preventDefault();
    setUnameInput(evt.target.value);
  };
  const pwChangeHandler = (evt) => {
    evt.preventDefault();
    setPwInput(evt.target.value);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setFormType("register");
  };
  return (
    <div>
      <h2>Login Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={unameInput}
          onChange={unameChangeHandler}
        />
        <input
          type="password"
          placeholder="password"
          value={pwInput}
          onChange={pwChangeHandler}
        />
        <button disabled={isLoading}>submit</button>
      </form>
      <p>
        Not registered?{" "}
        <button onClick={handleRegisterClick}>Register here</button>
      </p>
    </div>
  );
};

export default LoginForm;
