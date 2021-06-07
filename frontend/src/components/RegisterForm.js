import React, { useState } from "react";
import { registerUser } from "../util";

const RegisterForm = ({ setUser, setFormType }) => {
  const [unameInput, setUnameInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [confirmPwInput, setConfirmPwInput] = useState("");
  const submitHandler = (evt) => {
    evt.preventDefault();

    if (pwInput !== confirmPwInput) {
      return alert("passwords do not match!");
    }

    registerUser(unameInput, pwInput).then((user) => {
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
  const confirmPwChangeHandler = (e) => {
    e.preventDefault();
    setConfirmPwInput(e.target.value);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setFormType("login");
  };

  return (
    <div>
      <h2>Register Form</h2>
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
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPwInput}
          onChange={confirmPwChangeHandler}
        />
        <button>submit</button>
      </form>
      <p>
        Already registered?{" "}
        <button onClick={handleRegisterClick}>Login here</button>
      </p>
    </div>
  );
};

export default RegisterForm;
