import React, { useEffect, useState } from "react";
// import {Book} from "../Book";

export const ContributeRightPart = () => {
  const [bookContribution, SetBookContribution] = useState([]);
  const userdata = JSON.parse(localStorage.getItem("userInfo"));
  const fetchContributeData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/getcontribution/${userdata.userId}`
      );
      const data = await response.json();
      console.log(data.bookList);
      SetBookContribution(data.bookList.slice(0, 3));
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchContributeData();
  }, []);
  return (
    <>
      <div>
        <h2 style={{ margin: "0px" }}>
          Your <span style={{ color: "rgb(255, 100, 0)" }}>Contribution</span>
        </h2>
        <h2 style={{ margin: "0px" }}>Helps Other to Learn</h2>
      </div>
      <div style={{ marginTop: "25px" }}>
        <p style={{ fontSize: "14px" }}>Your Previous Contribute</p>
      </div>
      <div className="booklist">
        {/* <Book/> */}
        {/* <Book/> */}
        {/* <Book/> */}
        {bookContribution.map((item, index) => {
          return (
            <div
              key={index}
              className="bookContainer"
            >
              <div className="bookImageContainer">
                <div className="bookImage">
                  <img
                    src={`http://localhost:5000/${item.book_image}`}
                    alt="book"
                  ></img>
                </div>
                <div className="bookName">
                  <p>{item.book_name}</p>
                </div>
                <div className="bookAuthor">
                  <p>{item.book_author}</p>
                </div>
                <div className="bookRating">
                  <p>{item.rating}/5</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
