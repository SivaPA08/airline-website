import React, { useState } from "react";
import "./css/login.css"

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        <form>
          {isRegister && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isRegister && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button type="submit">{isRegister ? "Register" : "Login"}</button>
        </form>
        <p onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Already have an account? Login here!"
            : "Don't have an account? Register here!"}
        </p>
      </div>
    </div>
  );
}
