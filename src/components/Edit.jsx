import React, { useState } from "react";

export const Edit = () => {
  const [contributeInfo, setContributeInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContributeInfo((prevContributeInfo) => ({
      ...prevContributeInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit form data here
  };
  return (
    <>
      <div className="editBookForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="book_name">Book Name:</label>
            <input type="text" id="book_name" name="book_name" />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" />
          </div>
          <div className="form-group">
            <label htmlFor="book_image">Book Image:</label>
            <input type="file" id="book_image" name="book_image" />
          </div>
          <div className="form-group">
            <label htmlFor="book_pdf">Book PDF:</label>
            <input type="file" id="book_pdf" name="book_pdf" />
          </div>
          <div className="form-group">
            <label htmlFor="pages">Pages:</label>
            <input type="number" id="pages" name="pages" />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" step="0.1" />
          </div>
          <div className="form-group">
            <label htmlFor="availability">Availability:</label>
            <select id="availability" name="availability">
              <option value="Hardcopy">Hardcopy</option>
              <option value="Ebook">Ebook</option>
              <option value="Audiobook">Audiobook</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category">
              <option value="Adventure">Adventure</option>
              <option value="Autobiography">Autobiography</option>
              <option value="Novel">Novel</option>
              <option value="Mystery">Mystery</option>
              <option value="Science">Science</option>
              <option value="FairyTales">Fairy Tales</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
          <div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
