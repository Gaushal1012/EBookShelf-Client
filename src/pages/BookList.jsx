import React, { useState, useEffect } from "react";
import { Book } from "../components/Book";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { Greeting } from "../components/Greeting";
import Carousel from "../components/Carousel";
import { NewsRack } from "../components/NewsRack";
import Loader from "../loader.gif";

export const BookList = () => {
  const [loading, setLoading] = useState(true);
  const [user, SetUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const userdata = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/find/${userdata.email}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data.userInfo);
          // setUserData(data.userInfo);
          localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
          SetUser(true);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchUserData();

    // Clean up function
    return () => {
      // Any cleanup code here (if needed)
    };
  }, []);

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
            {user && <Navbar />}
            <Footer />
          </div>
          <div className="rightPart border border-red-500">
            <Header setSearchQuery={setSearchQuery} />
            <div style={{ marginRight: "22px" }} className="border">
              <div className="newArrivalSection">
                <div className="slider">
                  <Carousel />
                </div>
                <div className="newsRack">
                  <NewsRack />
                </div>
              </div>

              <div className="greetingMsg">
                <Greeting />
              </div>
              <div className="bookRowContainer">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p className="bookType">Recommended for you</p>
                  <Link className="activeLink" to="/booklist">
                    Show all
                  </Link>
                </div>
                {loading ? ( // Render loader if loading is true
                  <div className="loader-container">
                    <img src={Loader} alt="Loading..." />
                  </div>
                ) : (
                  <div className="bookRow">
                    <Book searchQuery={searchQuery} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
