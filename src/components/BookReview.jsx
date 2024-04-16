import React from "react";

export const BookReview = () => {
  return (
    <>
      <div className="bookReview">
        <div className="reviewOptions">
          <div>
            <p>Overview</p>
          </div>
          <div>
            <p>View Editions</p>
          </div>
          <div>
            <p>Details</p>
          </div>
          <div>
            <p>Reviews</p>
          </div>
          <div>
            <p>Lists</p>
          </div>
          <div>
            <p>Related Books</p>
          </div>
        </div>
        <div className="publishInfo">
          <div>
            <p>Published Date</p>
            <p style={{fontWeight:'600'}}>2000</p>
          </div>
          <div>
            <p>Publisher</p>
            <p style={{color:'rgb(255, 115, 0)'}}>New Rider Press</p>
          </div>
          <div>
            <p>Language</p>
            <p style={{color:'rgb(255, 115, 0)'}}>English</p>
          </div>
          <div>
            <p>Pages</p>
            <p style={{fontWeight:'600'}}>216</p>
          </div>
        </div>
        <div>
            <p style={{fontSize:'13px', marginTop:'20px'}}>Preview available in: <span style={{color:'rgb(255, 115, 0)'}}>English</span></p>
            <p style={{fontSize:'13px', marginTop:'20px'}}>Since Don't Make Me Think was first published in 2000, hunddreds os thousands of web designers and developers have relied on usability guru Steve Krug's guide to help them understande the priciples of inuitive navigation and information design.</p>
        </div>
      </div>
    </>
  );
};
