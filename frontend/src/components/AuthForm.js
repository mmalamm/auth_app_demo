import React, { useContext, useState } from "react";
import { UserContext } from "..";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  const { setUser } = useContext(UserContext);
  const [formType, setFormType] = useState("login");
  return formType === "login" ? (
    <LoginForm setUser={setUser} setFormType={setFormType} />
  ) : (
    <RegisterForm setUser={setUser} setFormType={setFormType} />
  );
};

export default AuthForm;
