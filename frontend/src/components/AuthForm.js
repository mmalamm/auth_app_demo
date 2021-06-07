import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm = ({ setUser }) => {
  const [formType, setFormType] = useState("login");
  return formType === "login" ? (
    <LoginForm setUser={setUser} setFormType={setFormType} />
  ) : (
    <RegisterForm setUser={setUser} setFormType={setFormType} />
  );
};

export default AuthForm;
