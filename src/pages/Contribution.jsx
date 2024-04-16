import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ContributeLeftPart } from "../components/ContributePage/ContributeLeftPart";
import { ContributeRightPart } from "../components/ContributePage/ContributeRightPart";

export const Contribution = () => {
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
            <div style={{ marginRight: "26px" }} className="border">
              <div className="contributePage">
                <div className="contributePageContainer">
                  <div className="contributePageLeftPart">
                    <div style={{margin:'10px 10px'}}>
                      <ContributeLeftPart />
                    </div>
                  </div>
                  <div className="contributePageRightPart">
                    <div style={{margin:'0px 10px 10px 10px'}}>
                      <ContributeRightPart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
