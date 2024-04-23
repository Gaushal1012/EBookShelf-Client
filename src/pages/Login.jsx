import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Login successful, redirect user or perform any action
        localStorage.setItem("userData", JSON.stringify(formData));
        console.log("Login successful");
        alert('login successfully');
        history("/booklist");
      } else {
        // Login failed, display error message
        const errorData = await response.json();
        alert("login failed");
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <>
      <div className="mountain">
        <div className="loginForm">
          <div className="heading">
            <h2>
              My <span style={{ color: "rgb(255, 115, 0)" }}>Book</span>
            </h2>
            <h3>S h e l f</h3>
          </div>
          <div className="heading">
            <p>Login</p>
            <p className="generalInfo">For Both Staff & Employees</p>
          </div>
          {/* form start*/}
          <form onSubmit={handleSubmit}>
            <div className="Form-group">
              <label htmlFor="employeeEmailId" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Form-group">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Form-group-checkbox">
              <label style={{ marginLeft: "-9px" }}>
                <input type="checkbox" />
                Remember me
              </label>
              <Link
                style={{ color: "gray", fontSize: "11px", marginTop: "15px" }}
                to="/forgotPassword"
              >
                Forgot password?
              </Link>
            </div>
            <div className="Form-group">
              <button className="registerBtn">Login</button>
            </div>
          </form>
          <div className="Form-group-Info">
            <p>
              New User?
              <span style={{ marginLeft: "5px" }}>
                <Link to="/">Register Here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
