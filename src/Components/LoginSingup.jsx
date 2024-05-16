import React, { useState } from "react";
import "../Login.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      // Handle submission logic here
    }
  }

  return (
    <div className="cont">
      <div className="head">
        <div className="te">{action}</div>
        <div className="under"></div>
      </div>
      <form>
        {action === "Sign Up" && (
          <div className="inp">
            <img src="./image/person.png" alt="icon" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputData.name}
              onChange={handleData}
            />
          </div>
        )}
        <div className="inp">
          <img src="./image/email.png" alt="icon" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
        </div>
        <div className="inp">
          <img src="./image/password.png" alt="icon" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
        </div>
        {action === "Log In" && (
          <div className="for">
            Forgot Password <span>Click Here?</span>
          </div>
        )}
        <div className="ne">
          <button
            type="button"
            className={action === "Sign Up" ? "submit" : "submit gray"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
          <button
            type="button"
            className={action === "Log In" ? "submit" : "submit gray"}
            onClick={() => setAction("Log In")}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
