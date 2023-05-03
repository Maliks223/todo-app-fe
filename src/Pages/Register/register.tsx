import { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput/textInput";
import "./register.scss";
import Button from "../../Components/Button/button";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = registerFormData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setRegisterFormData((prevRegisterFormData) => ({
      ...prevRegisterFormData,
      [fieldName]: fieldValue,
    }));
  };
  const onSubmit = () => {
    // e.preventDefault( )
  };

  return (
    <div className="register-page-container">
      <h1 className="register-page-title">register</h1>
      <form onSubmit={onSubmit} className="register-page-form">
        <TextInput
          type="email"
          name="email"
          onChange={onChange}
          value={email}
          placeHolder="Email"
          id="email"
        />
        <TextInput
          type="password"
          name="password"
          onChange={onChange}
          value={password}
          placeHolder="Password"
          id="Password"
        />
        <TextInput
          type="password"
          name="confirmPassword"
          onChange={onChange}
          value={confirmPassword}
          placeHolder="Confirm Password"
          id="confirmPassword"
        />
        <div className="register-login-navigator-container">
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="register-login-navigator-button">Login</button>
          </Link>
        </div>
        <Button text="Register" className="register-page-btn" />
      </form>
    </div>
  );
};

export default Register;
