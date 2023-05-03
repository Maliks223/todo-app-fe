import { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput/textInput";
import "./register.scss";
import Button from "../../Components/Button/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

const { localStorage } = window;

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegistrationResponse {
  success: boolean;
  message: string;
  token: any;
}

interface ApiError {
  message: string;
  errors?: { [key: string]: string[] };
}

function Register() {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<ApiError | null>(null);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setError(null)
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError({ message: "Passwords do not match" });
      return;
    }
    try {
      const response = await axios.post<RegistrationResponse>(
        API_URL,
        formData
      );
      localStorage.setItem("token", response.data.token);
      setError(null);
      navigate("/");
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      if (!response.data.token) {
        navigate("/register");
      }
    } catch (error: any) {
      setError(error.response.data);
    }
  };
  
  return (
    <div className="register-page-container">
      <h1 className="register-page-title">register</h1>
      <form onSubmit={handleSubmit} className="register-page-form">
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
        <TextInput
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
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
}

export default Register;
