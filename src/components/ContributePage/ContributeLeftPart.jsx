import React, { useEffect, useState } from "react";
import { SubmittedComponent } from "./SubmittedComponent"; // Import the component you want to display after submission
import { useNavigate } from "react-router-dom";
export const ContributeLeftPart = () => {
  const userdata = JSON.parse(localStorage.getItem("userInfo"));
  const [submitted, setSubmitted] = useState(false); // State to manage submission status
  const [contributeInfo, setContributeInfo] = useState({
    user_id: userdata.userId,
    book_name: "",
    book_author: "",
    book_type: "",
    book_language: "",
    book_format: "",
    reason: "",
  });
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContributeInfo((prevContributeInfo) => ({
      ...prevContributeInfo,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit form data here
    try {
      const response = await fetch("http://localhost:5000/addcontribute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contributeInfo),
      });
      if (response.ok) {
        console.log("Login successful");
        alert("login successfully");
        // history("/booklist");
      } else {
        // Login failed, display error message
        const errorData = await response.json();
        alert("login failed");
        console.error("Login failed:", errorData.message);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }

    // For demonstration purposes, I'm just toggling the submitted state
    setSubmitted(true);
  };

  // Effect to redirect to home page after 10 seconds
  useEffect(() => {
    let timeoutId;
    if (submitted) {
      timeoutId = setTimeout(() => {
        history("/booklist"); // Redirect to home page
      }, 5000); // 10 seconds delay
    }
    return () => {
      clearTimeout(timeoutId); // Cleanup the timeout
    };
  }, [submitted, history]);

  // Render the form or the submitted component based on submission status
  return (
    <>
      {submitted ? (
        <SubmittedComponent />
      ) : (
        <>
          <div style={{ fontWeight: "600", marginBottom: "20px" }}>
            Fill up Book Details
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="formLeftPart">
                <div className="form-group">
                  <input
                    onChange={handleChange}
                    value={contributeInfo.book_name}
                    type="text"
                    id="from"
                    name="book_name"
                    placeholder="Book Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={handleChange}
                    value={contributeInfo.book_author}
                    name="book_author"
                    type="text"
                    id="from"
                    placeholder="Author Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    onChange={handleChange}
                    value={contributeInfo.reason}
                    name="reason"
                    id="description"
                    cols={30}
                    rows={5}
                    placeholder="Reason For Your Contribution"
                  ></textarea>
                </div>
              </div>
              <div className="formRightPart">
                <div className="dropdown">
                  <div>
                    {/* <p>category</p>
                    <i class="mx-4 fa-solid fa-caret-down"></i> */}
                    <select
                      onChange={handleChange}
                      value={contributeInfo.book_type}
                      name="book_type"
                    >
                      <option value="Novel">Novel</option>
                      <option value="History">History</option>
                      <option value="Mystory">Mystory</option>
                    </select>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {/* <p>Lang</p>
                    <i class="mx-4 fa-solid fa-caret-down"></i> */}
                    <select
                      onChange={handleChange}
                      value={contributeInfo.book_language}
                      name="book_language"
                    >
                      <option value="Gujarati">Gujarati</option>
                      <option value="Hindi">Hindi</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                </div>
                <div className="options">
                  <p style={{ fontWeight: "500" }}>Available Format</p>
                  <div>
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      name="book_format"
                      value="Hard Copy"
                      checked={contributeInfo.book_format === "Hard Copy"}
                      onChange={handleChange}
                    />
                    <label htmlfor="myCheckbox">Hard Copy</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      name="book_format"
                      value="E-Book"
                      checked={contributeInfo.book_format === "E-Book"}
                      onChange={handleChange}
                    />
                    <label htmlfor="myCheckbox">E - Book</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      name="book_format"
                      value="Audio Book"
                      checked={contributeInfo.book_format === "Audio Book"}
                      onChange={handleChange}
                    />
                    <label htmlfor="myCheckbox">Audio Book</label>
                  </div>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};
