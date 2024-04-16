import React, { useEffect, useState } from "react";

export const Shelf = () => {
  const [bookShelf, SetBookShelf] = useState([]);
  const userdata = JSON.parse(localStorage.getItem("userInfo"));
  const fetchShelfData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/getshelf/${userdata.userId}`);
      const data = await response.json();
      console.log(data.bookList);
      SetBookShelf(data.bookList);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const RemoveBook = (id) =>{
    //Remove Book
    console.log("Item deleted");
  }

  const EditBook = (id) =>{
    //Edit Book
    console.log("Item edited");
  }

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
                <th>Issue Date</th>
                <th>Return Date</th>
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
                    <td>{item.issuedate.substring(0, 10)}</td>
                    <td>{item.returndate.substring(0, 10)}</td>
                    <td>
                      <div>
                        <div onClick={()=>{EditBook(item.shelf_id)}} className="edit">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </div>
                        <div onClick={()=>{RemoveBook(item.shelf_id)}} className="delete">
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
