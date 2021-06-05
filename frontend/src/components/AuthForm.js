import React, { useState } from "react";
import LoginForm from "./LoginForm";

const RegisterForm = () => {
  return <h3>Register!!</h3>;
};

const AuthForm = ({ setUser }) => {
  const [formType, setFormType] = useState("login");
  return formType === "login" ? (
    <LoginForm setUser={setUser} />
  ) : (
    <RegisterForm />
  );
};

export default AuthForm;
