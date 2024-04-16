import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Book } from "../components/Book";
import { BookDesc } from "../components/BookDesc";
import { useNavigate } from "react-router-dom";
import { BookAuthorInfo } from "../components/BookAuthorInfo";
import { BuyBook } from "../components/BuyBook";
import { BookReview } from "../components/BookReview";
import { BorrowModal } from "../components/Modal/BorrowModal";
import { useParams } from "react-router-dom";
import Loader  from "../loader.gif";

export const BookInfo = () => {
  const [book, SetBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const history = useNavigate();
  const HandleClick = () => {
    history("/booklist");
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/book/${id}`);
      const data = await response.json();
      console.log(data.bookList);
      SetBook(data.bookList);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      // setLoading(false); // Set loading to false when data fetching is complete
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
            <Header />
            <div style={{ marginRight: "22px" }} className="bookInfo">
              <div
                className="bookInfoLink"
                onClick={() => {
                  HandleClick();
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "5px",
                }}
              >
                <i style={{ color: "gray" }} class="fa-solid fa-arrow-left"></i>
                <p style={{ fontSize: "13px", color: "gray" }}>
                  Back to Result
                </p>
              </div>
              {loading ? ( // Render loader if loading is true
                <div className="loader-container">
                  <img src={Loader} alt="Loading..." />
                </div>
              ) : (
                <div className="bookInfoContainer">
                  <div>
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
                  </div>
                  {book.length > 0 && ( // Add this condition
                    <div>
                      <BookDesc Id={id} toggleModal={toggleModal} />
                    </div>
                  )}
                  <div>
                    {book.length > 0 && (
                      <BookAuthorInfo Author={book[0]?.author} />
                    )}
                  </div>
                </div>
              )}
              <div className="buyBookContainer">
                <div>
                  <BuyBook />
                </div>
                <div>
                  <BookReview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {showModal && (
        <BorrowModal
          BookName={book.book_name}
          BookUrl={book.book_img}
          BookId={id}
          toggleModal={toggleModal}
        />
      )} */}
      {book.length > 0 && showModal && (
        <BorrowModal
          BookName={book[0]?.book_name}
          BookUrl={book[0]?.book_img}
          BookId={id}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};
