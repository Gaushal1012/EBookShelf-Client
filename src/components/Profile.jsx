import React, { useState, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ContributeIcon from "../contributeIcon.png";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  input: {
    display: "none",
  },
}));

export const Profile = () => {
  const classes = useStyles();
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setProfilePhoto(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
    if (file) {
      setProfilePhoto(file); // Update profilePhoto state with the selected file
    }
  };

  const history = useNavigate();

  const [userInfo, setUserInfo] = useState({
    user_id: 0,
    username: "",
    email: "",
    password: "",
    reading: 0,
    contributions: 0,
    profilepicture: "",
    bio: "",
  });

  console.log(userInfo.reading);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo({
      user_id: userdata.userId,
      username: userdata.username,
      email: userdata.email,
      password: userdata.password,
      reading: userdata.reading,
      contributions: userdata.contribute,
      profilepicture: userdata.profileurl,
      bio: userdata.bio,
    });
    setProfilePhoto(userdata.profileurl); // Setting the profile photo URL
  }, []); // Empty dependency array ensures useEffect runs only once after mounting

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Retrieve JWT token from localStorage
      const jwtToken = localStorage.getItem("authToken");
      console.log(jwtToken);

      const formData = new FormData();
      formData.append("userId", userInfo.user_id);
      formData.append("username", userInfo.username);
      formData.append("email", userInfo.email);
      formData.append("password", userInfo.password);
      formData.append("phone", userInfo.phone);
      formData.append("bio", userInfo.bio);
      formData.append("profileimg", profilePhoto);

      // Create headers object and add Authorization header with JWT token
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${jwtToken}`);

      const response = await fetch("http://localhost:5000/UpdateUsers", {
        method: "PUT",
        headers: headers,
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log success message
        // Optionally, you can redirect the user to another page
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const HandleClick = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userData");
    history("/login");
  };

  return (
    <>
      <div className="userProfiles">
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <div className="formFirstRow">
            <div className="form-group photo">
              <label htmlFor="from">User Profile</label>
              <div className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="profile-photo-input"
                  type="file"
                  onChange={handleFileChange}
                />
                <Avatar
                  alt="User Profile"
                  src={
                    `http://localhost:5000/${profilePhoto}` ||
                    userInfo.profilepicture
                  }
                  className={classes.avatar}
                />
                <label htmlFor="profile-photo-input">
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="profile-photo-input"
                    type="file"
                    onChange={handleFileChange}
                  />
                  <Button
                    variant="contained"
                    color="default"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload
                  </Button>
                </label>
              </div>
            </div>
            <div className="reading">
              <div>
                <p className="para">
                  <i
                    style={{ color: "rgb(255, 115, 0)" }}
                    class="fa-solid fa-book"
                  ></i>
                </p>
                <p style={{ color: "white", fontWeight: "500" }}>
                  {userInfo.reading}
                </p>
              </div>
              <p
                style={{
                  color: "white",
                  fontWeight: "500",
                  margin: "0px",
                  marginLeft: "15px",
                }}
              >
                Reading
              </p>
            </div>
            <div className="reading contribute">
              <div>
                <p className="para">
                  <img src={ContributeIcon}></img>
                </p>
                <p style={{ color: "white", fontWeight: "500" }}>
                  {userInfo.contributions}
                </p>
              </div>
              <p
                style={{
                  color: "white",
                  fontWeight: "500",
                  margin: "0px",
                  marginLeft: "15px",
                }}
              >
                Contribution
              </p>
            </div>
          </div>
          <div className="secondRow">
            <div className="form-group">
              <label htmlFor="from">User Name</label>
              <input
                type="text"
                id="from"
                value={userInfo.username}
                onChange={handleChange}
                name="username"
                placeholder="Author Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="from">Email</label>
              <input
                type="text"
                id="from"
                value={userInfo.email}
                onChange={handleChange}
                name="email"
                placeholder="Author Name"
                required
              />
            </div>
          </div>
          <div className="thirdRow">
            <div className="form-group">
              <label htmlFor="from">Password</label>
              <input
                type="text"
                id="from"
                value={userInfo.password}
                onChange={handleChange}
                name="password"
                placeholder="Author Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="from">Phone No</label>
              <input
                type="text"
                id="from"
                value={userInfo.password}
                onChange={handleChange}
                name="password"
                placeholder="Author Name"
                required
              />
            </div>
          </div>
          <div className="fourthRow">
            <div className="form-group">
              <label htmlFor="from">Bio</label>
              <textarea
                id="description"
                cols={30}
                rows={5}
                value={userInfo.bio}
                onChange={handleChange}
                name="bio"
                placeholder="Reason For Your Contribution"
              ></textarea>
            </div>
          </div>
          <div className="fourthRow">
            <button type="submit">Submit</button>
            <button
              style={{ backgroundColor: "red", border: "1px solid red" }}
              onClick={() => HandleClick()}
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
