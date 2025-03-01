import React, { useState } from "react";
import "./css/login.css";
import axios from "axios";

const LoginForm = ({ onSwitch }) => {
  const [msg, setMsg] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login/", { email, password });
      setMsg(res.data.message);
    } catch (err) {
      setMsg("Error logging in");
    }
  };

  return (
    <div className="form-box">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit">Login</button>
      </form>
      {msg && <p className="message">{msg}</p>}
      <p onClick={onSwitch}>Don't have an account? Register here!</p>
    </div>
  );
};

const RegisterForm = ({ onSwitch }) => {
  const [msg, setMsg] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setMsg("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register/", { fullname, email, password });
      setMsg(res.data.message);
    } catch (err) {
      setMsg("Error registering");
    }
  };

  return (
    <div className="form-box">
      <h2>Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <input type="text" placeholder="Full Name" name="fullname" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
        <button type="submit">Register</button>
      </form>
      {msg && <p className="message">{msg}</p>}
      <p onClick={onSwitch}>Already have an account? Login here!</p>
    </div>
  );
};

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="container">
      {isRegister ? <RegisterForm onSwitch={toggleForm} /> : <LoginForm onSwitch={toggleForm} />}
    </div>
  );
}
