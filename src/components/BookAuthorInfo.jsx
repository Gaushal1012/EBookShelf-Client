import React, { useEffect, useState } from "react";
import BookAuthor from "../author.png";
// import BookImage from "../dooglpan.jpg";

export const BookAuthorInfo = ({Author}) => {
  const [bookImage, SetBookImage] = useState([]);
  console.log(Author)
  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/booklist/${Author}`);
      const data = await response.json();
      console.log(data.bookList);
      SetBookImage(data.bookList.slice(0, 5));
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(()=>{
    fetchUserData();
  },[]);
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid white",
          borderRadius: "5px",
        }}
      >
        <div className="bookAuthContainer">
          <div className="aboutAuthor">
            <h4>
              <span style={{ color: "rgb(255, 115, 0)" }}>About</span> Author
            </h4>
          </div>
          <div className="author">
            <p>{Author}</p>
            <img src={BookAuthor} alt="book"></img>
          </div>
          <div className="bookdescription">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ea
              soluta distinctio earum quam nobis suscipit similique provident
              id? Necessitatibus dignissimos aliquam suscipit vel.
            </p>
          </div>
          <div className="otherBooks">
            {bookImage.map((item,index) => {
              return (
                <img key={index} src={`http://localhost:5000/${item.book_img}`}></img>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};
