import React, { useEffect, useState } from "react";

export const BorrowModal = ({ toggleModal, BookId, BookName, BookUrl }) => {
  const [submitted, setSubmitted] = useState(false);
  const userdata = JSON.parse(localStorage.getItem("userInfo"));

  const [userInfo, setUserInfo] = useState({
    emp_id: userdata.userId,
    book_id: BookId,
    book_name: BookName,
    book_img: BookUrl,
    Issuedate: "",
    Returndate: "",
    description: "",
  });

  console.log(userInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit form data here
    try {
      const response = await fetch("http://localhost:5000/Shelf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
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

  const handleClose = () => {
    setSubmitted(false);
    toggleModal(); // Close the BorrowModal
  };

  useEffect(()=>{

  },[])

  return (
    <>
      {/* Modal overlay */}
      <div className="modal">
        {/* Modal content */}
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>
            &times;
          </span>
          <p style={{ textAlign: "center", fontWeight: "600" }}>
            {submitted ? "Process Completed!" : "Fill Up the Details"}
          </p>
          {submitted ? (
            <div style={{ margin: "120px 0px" }}>
              <div className="submitClass">
                <i
                  style={{ color: "white", fontSize: "60px" }}
                  class="fa-solid fa-check"
                ></i>
              </div>
            </div>
          ) : (
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="from">From</label>
                  <input
                    onChange={handleChange}
                    value={userInfo.Issuedate}
                    name="Issuedate"
                    type="date"
                    id="from"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="to">To</label>
                  <input
                    onChange={handleChange}
                    value={userInfo.Returndate}
                    name="Returndate"
                    type="date"
                    id="to"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="serial">Book Serial No.</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      id="serial"
                      placeholder="Enter 6 Digit Serial No. Or Scan"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    onChange={handleChange}
                    value={userInfo.description}
                    name="description"
                    id="description"
                    cols={30}
                    rows={5}
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
          {submitted && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="close-btn" onClick={handleClose}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
