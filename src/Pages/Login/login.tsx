import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../Components/TextInput/textInput";
import "./login.scss";
import Button from "../../Components/Button/button";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users/login";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
}

interface ApiError {
  message: string;
  errors?: { [key: string]: string[] };
}

function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ApiError | null>(null);

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post<LoginResponse>(API_URL, formData);
      localStorage.setItem("token", response.data.token);
      setError(null);
      navigate("/");
      setFormData({
        email: "",
        password: "",
      });
    } catch (error: any) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login-page-container">
      <h1 className="login-page-title">login</h1>
      <form onSubmit={handleSubmit} className="login-page-form">
        {error && (
          <div className="error-notice">
            <div className="oaerror danger">
              <strong>Error</strong>- {error.message}
            </div>
          </div>
        )}
        <TextInput
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeHolder="Email"
          id="email"
        />
        <TextInput
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
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
}

export default Login;
