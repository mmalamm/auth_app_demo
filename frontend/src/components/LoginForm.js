import React, { useState } from "react";
import { loginUser } from "../util";

const LoginForm = ({ setUser, setFormType }) => {
  const [unameInput, setUnameInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const submitHandler = (evt) => {
    evt.preventDefault();
    loginUser(unameInput, pwInput).then((user) => {
      setUser(user);
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

  const handleRegisterClick = e => {
    e.preventDefault();
    setFormType('register')
  }
  return (
    <div>
      <h2>Login Form</h2>
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
        <button>submit</button>
      </form>
      <p>
        Not registered?{" "}
        <button onClick={handleRegisterClick}>Register here</button>
      </p>
    </div>
  );
};

export default LoginForm;
