import React, { useEffect, useState } from "react";
import BookImage from "../dooglpan.jpg";
import { useNavigate } from "react-router-dom";

export const Book = ({searchQuery}) => {
  const [book, SetBook] = useState([]);
  const history = useNavigate();
  const HandleClick = (id) => {
    history(`/bookinfo/${id}`);
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/getbook`);
      const data = await response.json();
      console.log(data.books);
      const filtered = data.books.filter(
        (book) =>
          book.book_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(filtered);
      // SetBook(data.books);
      SetBook(filtered);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [searchQuery]);
  return (
    <>
      {book.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => HandleClick(item.book_id)}
            className="bookContainer"
          >
            <div className="bookImageContainer">
              <div className="bookImage">
                <img
                  src={`http://localhost:5000/${item.book_img}`}
                  alt="book"
                ></img>
              </div>
              <div className="bookName">
                <p>{item.book_name}</p>
              </div>
              <div className="bookAuthor">
                <p>{item.author}</p>
              </div>
              <div className="bookRating">
                <p>{item.rating}/5</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
