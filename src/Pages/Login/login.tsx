import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput/textInput";
import "./login.scss";
import Button from "../../Components/Button/button";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [loginFormData, setLoginFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setLoginFormData((prevLoginFormData) => ({
      ...prevLoginFormData,
      [fieldName]: fieldValue,
    }));
  };
  const onSubmit = () => {
    // e.preventDefault( )
  };

  return (
    <div className="login-page-container">
      <h1 className="login-page-title">login</h1>
      <form onSubmit={onSubmit} className="login-page-form">
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
        <div className="login-register-navigator-container">
          <p>Don't have an account yet?</p>
          <Link to="/register">
            <div className="login-register-navigator-button">Signup</div>
          </Link>
        </div>
        <Button text="Login" className="login-page-btn" />
      </form>
    </div>
  );
};

export default Login;
