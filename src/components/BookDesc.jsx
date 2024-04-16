import React from "react";
import {useNavigate} from "react-router-dom";

export const BookDesc = ({ toggleModal, Id }) => {
  const history = useNavigate();
  const HandleClick = (id) =>{
    history(`/bookreader/${id}`)
  }
  return (
    <>
      <div>
        <h3>DOGLAPAN</h3>
        <p className="bookInfoPara">
          By <span style={{ textDecoration: "underline" }}>Ashneer Grover</span>
          , 2022
        </p>
        <p className="bookInfoParaEdition">Second Edition</p>
        <div className="bookRating">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div>
            <p>5.0 Rating</p>
          </div>
          <div>
            <p style={{ marginLeft: "20px" }}>116 Have read</p>
          </div>
        </div>
        <div className="bookAvailability">
          <div className="available">
            <p className="head">Availability</p>
            <div className="row">
              <p className="para">
                <i class="fa-solid fa-check"></i>
              </p>
              <p>Hard Copy</p>
            </div>
            <div className="row">
              <p className="para">
                <i class="fa-solid fa-check"></i>
              </p>
              <p>Audio Book</p>
            </div>
            <div className="row">
              <p className="para">
                <i class="fa-solid fa-check"></i>
              </p>
              <p>E - Book</p>
            </div>
          </div>
          <div className="status">
            <p className="head">Status</p>
            <div className="statusBtn">
              <p>In-Shelf</p>
            </div>
            <div className="row">
              <p>
                <i class="fa-solid fa-location-dot"></i>
              </p>
              <p>CS A-15</p>
            </div>
          </div>
          <div className="addToList">
            <div className="btn">
              <p>Add</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div className="actionBtn">
          <button className="btn btnn borrow" onClick={toggleModal}>Borrow</button>
          <div className="btn">
            <button onClick={()=>HandleClick(Id)} className="readNow">Read Now</button>
            <button className="headset"><i class="fa-solid fa-headset"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};
