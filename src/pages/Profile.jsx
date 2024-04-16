// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// // import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
//   input: {
//     display: 'none',
//   },
// }));

// export const Profile = () => {
//   const classes = useStyles();
//   const [profilePhoto, setProfilePhoto] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePhoto(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className={classes.root}>
//       <input
//         accept="image/*"
//         className={classes.input}
//         id="profile-photo-input"
//         type="file"
//         onChange={handleFileChange}
//       />
//       <label htmlFor="profile-photo-input">
//         <input
//           accept="image/*"
//           className={classes.input}
//           id="profile-photo-input"
//           type="file"
//           onChange={handleFileChange}
//         />
//         <Button
//           variant="contained"
//           color="default"
//           component="span"
//           startIcon={<CloudUploadIcon />}
//         >
//           Upload
//         </Button>
//       </label>
//       <Avatar alt="User Profile" src={profilePhoto} className={classes.avatar} />
//     </div>
//   );
// }
