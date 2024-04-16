import React from "react";
import Ebay from "../ebay.png";
import Amazon from "../amazone.png";
import { Link } from "react-router-dom";

export const BuyBook = () => {
  return (
    <>
      <div className="buyOptions">
        <div className="ecomOptions">
            <div><p style={{fontWeight:'600'}}><span style={{color:'rgb(255, 115, 0)'}}>Buy</span> this book online</p></div>
            <div>
                <img src={Ebay} alt="logo"></img>
                <Link to='https://ebay.com'><p style={{textDecoration:'underline'}}>Buy Now</p></Link>
            </div>
            <div>
                <img src={Amazon} alt="logo"></img>
                <Link to='https://amazon.com'><p style={{textDecoration:'underline'}}>Buy Now</p></Link>
            </div>
            <div className="commisionPara">
                <p>When you buy books using these links the internet Archive may earn a <span style={{textDecoration:'underline'}}>small commision</span></p>
            </div>
        </div>
      </div>
    </>
  );
};
