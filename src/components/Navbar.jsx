import React from "react";
import HomeIcon from "../homeIcon.png";
import SearchIcon from "../searchIcon.png";
import ShelfIcon from "../shelfIcon.png";
import ContributeIcon from "../contributeIcon.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const history = useNavigate();
  const userdata = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userdata);
  const HandleClickHome = () => {
    history("/booklist");
  };
  const HandleClickContribute = () => {
    history("/contribute");
  };
  const HandleClickMyShelf = () => {
    history("/myshelf");
  };
  const HandleClickManageBook = () => {
    history("/managebook");
  };
  return (
    <>
      <div className="navbar">
        <div
          onClick={() => {
            HandleClickHome();
          }}
          className="navLink"
        >
          <img src={HomeIcon} alt="home"></img>
          <p>Home</p>
        </div>
        <div className="navLink">
          <img src={SearchIcon} alt="search" />
          <p>Search</p>
        </div>
        <div
          onClick={() => {
            HandleClickMyShelf();
          }}
          className="navLink"
        >
          <img src={ShelfIcon} alt="shelf" />
          <p>My Shelf</p>
        </div>
        <div
          onClick={() => {
            HandleClickContribute();
          }}
          className="navLink"
        >
          <img src={ContributeIcon} alt="contribute" />
          <p>Contribute</p>
        </div>
        {userdata.role==1?<div
          onClick={() => {
            HandleClickManageBook();
          }}
          className="navLink"
        >
          <i style={{color:"black",fontSize:"15px"}} class="fa-solid fa-cloud-arrow-up"></i>
          <p>Manage Book</p>
        </div>:null}
      </div>
    </>
  );
};
