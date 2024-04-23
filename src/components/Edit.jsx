import React from "react";

export const Edit = () => {
  return (
    <>
      <div>
        <form enctype="multipart/form-data" action="submit-form" method="post">
          <div>
            <label for="book_id">Book ID:</label>
            <input type="text" id="book_id" name="book_id" />
          </div>
          <div>
            <label for="book_name">Book Name:</label>
            <input type="text" id="book_name" name="book_name" />
          </div>
          <div>
            <label for="author">Author:</label>
            <input type="text" id="author" name="author" />
          </div>
          <div>
            <label for="book_image">Book Image:</label>
            <input type="file" id="book_image" name="book_image" />
          </div>
          <div>
            <label for="book_pdf">Book PDF:</label>
            <input type="file" id="book_pdf" name="book_pdf" />
          </div>
          <div>
            <label for="pages">Pages:</label>
            <input type="number" id="pages" name="pages" />
          </div>
          <div>
            <label for="rating">Rating:</label>
            <input type="number" id="rating" name="rating" step="0.1" />
          </div>
          <div>
            <label for="description">Description:</label>
            <br />
            <textarea
              id="description"
              name="description"
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div>
            <label for="availability">Availability:</label>
            <select id="availability" name="availability">
              <option value="Hardcopy">Hardcopy</option>
              <option value="Ebook">Ebook</option>
              <option value="Audiobook">Audiobook</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
          <div>
            <label for="category">Category:</label>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
