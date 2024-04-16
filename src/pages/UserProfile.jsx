// import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Profile } from "../components/Profile";
// import { Link } from "react-router-dom";

export const UserProfile = () => {
  const history = useNavigate();
  const HandleClick = () => {
    history("/booklist");
  };
  return (
    <>
      <div className="BookMountain">
        <div className="bookListContainer">
          <div className="leftPart">
            <div className="heading">
              <h2 className="text-3xl">
                My <span style={{ color: "rgb(255, 115, 0)" }}>Book</span>
              </h2>
              <h3 className="text-2xl">S h e l f</h3>
            </div>
            <Navbar />
            <Footer />
          </div>
          <div className="rightPart border border-red-500">
            <Header />
            <div style={{ marginRight: "22px" }} className="border">
              <div className="userInfoContainer">
                <div
                  className="bookInfoLink"
                  onClick={() => {
                    HandleClick();
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "25px",
                    cursor:'pointer'
                  }}
                >
                  <i
                    style={{ color: "gray" }}
                    class="fa-solid fa-arrow-left"
                  ></i>
                  <p style={{ fontSize: "13px", color: "gray" }}>
                    Back to Result
                  </p>
                </div>
                <div>
                  <Profile/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
