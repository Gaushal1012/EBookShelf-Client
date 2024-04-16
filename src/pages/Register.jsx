import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //Add/Cerate a new project
  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     if (formData.password !== formData.confirmpassword) {
  //       alert("your confirm password is not same as your pasword");
  //     } else {
  //       const req = await fetch("http://localhost:5000/addUsers", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });
  //       console.log(req);
  //       setFormData(initialFormData);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert("All Field must be required");
  //   }
  // };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.password !== formData.confirmpassword) {
        alert("Your confirm password is not the same as your password");
      } else {
        const formDataToSend = new FormData();
        formDataToSend.append("username", formData.username);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("password", formData.password);
        formDataToSend.append("confirmpassword", formData.confirmpassword);
        formDataToSend.append("role", formData.role);
  
        const req = await fetch("http://localhost:5000/addUsers", {
          method: "POST",
          body: formDataToSend,
        });
  
        console.log(req);
        setFormData(initialFormData);
      }
    } catch (error) {
      console.log(error);
      alert("All fields must be required");
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
            <p>Registration</p>
            <p className="generalInfo">For Both Staff & Employees</p>
          </div>
          {/* form start*/}
          <form onSubmit={handleSubmit}>
            <div className="Form-group">
              <label htmlFor="employeeCode" className="form-label">
                Employee Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Form-group">
              <label htmlFor="employeeEmailId" className="form-label">
                Employee Email Id:
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
              <label htmlFor="employeeEmailId" className="form-label">
                Role:
              </label>
              <select
                className="form-control"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
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
            <div className="Form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
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
              <button className="registerBtn">Register</button>
            </div>
          </form>
          <div className="Form-group-Info">
            <p>
              Already a User?
              <span style={{ marginLeft: "5px" }}>
                <Link to="/login">Login Now</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
