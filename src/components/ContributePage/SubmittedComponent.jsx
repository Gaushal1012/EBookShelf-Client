import React from "react";

export const SubmittedComponent = () => {
  return (
    <>
      <div className="submitContainer">
        <div>
          <p>Thank you For your Submission</p>
        </div>
        <div style={{height:'30vh', width:'18vw', backgroundColor:'green', borderRadius:'50%'}}>
          <i style={{fontSize:'40px'}} class="fa-solid fa-check"></i>
        </div>
        <div>
            You will be contacted shortly
        </div>
      </div>
    </>
  );
};
