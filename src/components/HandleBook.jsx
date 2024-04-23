import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HandleBook = () => {
  const history = useNavigate();
  const [bookShelf, SetBookShelf] = useState([]);
  const fetchShelfData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/getbook`);
      const data = await response.json();
      console.log(data.books);
      SetBookShelf(data.books);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const RemoveBook = async (id) => {
    //Remove Book
    try {
      const response = await fetch(`http://localhost:5000/deleteshelf/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Item deleted");
        // Remove the deleted project from the project state array
        SetBookShelf((prevBookShelf) =>
          prevBookShelf.filter((book) => book.shelf_id !== id)
        );
      } else {
        console.log("Failed to delete item");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const EditBook = (id) => {
    history(`/edit/${id}`);
  };
  useEffect(() => {
    fetchShelfData();
  }, []);
  return (
    <>
      <div className="shelfContainer">
        <div className="shelfTable">
          <table className="bookshelf-table">
            <thead>
              <tr>
                <th>Book</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookShelf.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        className="book-image"
                        src={`http://localhost:5000/${item.book_img}`}
                        alt="book"
                      ></img>
                    </td>
                    <td>{item.book_name}</td>
                    <td>{item.author}</td>
                    <td>
                      <div>
                        <div
                          onClick={() => {
                            EditBook(item.book_id);
                          }}
                          className="edit"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                        </div>
                        <div
                          onClick={() => {
                            RemoveBook(item.book_id);
                          }}
                          className="delete"
                        >
                          <i class="fa-solid fa-trash"></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
