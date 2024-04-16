import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Shelf } from "../components/Shelf";

export const BookShelf = () => {
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
              <div style={{marginTop:'30px'}}>
                <Shelf />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
