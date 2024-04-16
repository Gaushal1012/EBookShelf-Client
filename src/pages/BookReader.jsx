import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// import { Header } from "../components/Header";
import "./BookReader.css";
import { ReaderModal } from "../components/Modal/ReaderModal";
import { useParams } from "react-router-dom";

export const BookReader = () => {
  const [book, SetBook] = useState([]);
  const { id } = useParams();
  console.log(id);
  // console.log(book[0].book_pdfFile);
  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/book/${id}`);
      const data = await response.json();
      console.log(data.bookList);
      SetBook(data.bookList);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
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
            <Navbar />
            <Footer />
          </div>
          <div className="rightPart border border-red-500">
            {book.length > 0 && ( // Add this condition to check if book[0] exists
              <div>
                <ReaderModal
                  Pdf={book[0]?.book_pdfFile} // Use optional chaining to avoid errors if book[0] is undefined
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
