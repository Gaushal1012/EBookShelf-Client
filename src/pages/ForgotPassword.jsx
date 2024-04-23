import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/changePassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Login successful");
        alert("login successfully");
        history("/login");
      } else {
        // Login failed, display error message
        const errorData = await response.json();
        alert("Invalid Email");
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div className="mountain">
      <div className="loginForm">
        <div className="heading">
          <h2>
            My <span style={{ color: "rgb(255, 115, 0)" }}>Book</span>
          </h2>
          <h3>S h e l f</h3>
        </div>
        <div className="heading">
          <p>Forgot Password</p>
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
              New Password:
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
          <div className="Form-group">
            <label htmlFor="password" className="form-label">
              Confirm New Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Form-group">
            <button className="registerBtn">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};
