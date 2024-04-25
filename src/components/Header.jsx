import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = ({ setSearchQuery }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const history = useNavigate();

  // Array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const userdata = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userdata);

  const HandleClick = () => {
    history(`/user/${userdata.userId}`);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    // Function to update current time every second
    const updateTime = () => {
      const date = new Date();
      let hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const year = date.getFullYear();
      let month = date.getMonth();
      month = monthNames[month];
      const currentDate = date.getDate();
      if (hours > 12) {
        hours = hours - 12;
      }
      setCurrentTime(`${hours}:${minutes}`);
      setCurrentDate(`${currentDate}-${month}-${year}`);
    };

    // Update time initially
    updateTime();

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="header">
        <div
          style={{ display: "flex", gap: "15px" }}
          className="h-10 bg-grey-500"
        >
          <div className="h-8 w-2/6 border border-black rounded-lg searchbar">
            <div className="options">
              <p className="justify-center">
                <span className="ms-3">All</span>
                <i
                  style={{ color: "black" }}
                  class="mx-4 fa-solid fa-caret-down"
                ></i>
              </p>
            </div>
            <div className="searctSection">
              <p>
                <input
                  onChange={handleSearch}
                  className="input"
                  type="text"
                  placeholder="Search"
                />
              </p>
              <i
                style={{ color: "rgb(255, 115, 0)" }}
                class="fa-solid fa-magnifying-glass"
              ></i>
              <span className="mx-5" style={{ margin: "0px 10px" }}>
                |
              </span>
              <i
                style={{ color: "rgb(255, 115, 0)" }}
                class="fa-solid fa-qrcode"
              ></i>
            </div>
          </div>

          <div className="h-8 w-2/6 border border-black rounded-lg language">
            <i
              style={{ color: "rgb(255, 115, 0)" }}
              class="fa-solid fa-language"
            ></i>
            <div>
              <p>Lang</p>
              <i
                style={{ color: "black" }}
                class="mx-4 fa-solid fa-caret-down"
              ></i>
            </div>
          </div>

          <div className="h-8 w-2/6 border border-black rounded-lg timespan">
            <div className="time">
              <i
                style={{ color: "rgb(255, 115, 0)" }}
                class="fa-regular fa-clock"
              ></i>
              <p>{currentTime}</p>
            </div>
            <div className="calendar">
              <i
                style={{ color: "rgb(255, 115, 0)" }}
                class="fa-regular fa-calendar"
              ></i>
              <p>{currentDate}</p>
            </div>
          </div>

          <div
            onClick={() => HandleClick()}
            className="h-8 w-2/6 border border-black rounded-lg userProfile"
          >
            {userdata && (
              <img
                src={`http://localhost:5000/${userdata.profileurl}`}
                className="userLogo"
              >
                {/* <i
                style={{ color: "rgb(255, 115, 0)" }}
                class="fa-solid fa-user"
              ></i> */}
              </img>
            )}
            <div className="userInfo">
              {userdata && <p>{userdata.username}</p>}
              <i
                style={{ color: "rgb(255, 115, 0)" }}
                class="fa-solid fa-caret-down"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
