import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Center the slides
    centerPadding: "0px", // Remove padding between centered slide and edge
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slideContent">
          <p style={{ textAlign: "center" }}>Today's Quotes</p>
          <p className="quotes">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos quaerat, id."
          </p>
          <p className="quotesAuthor">- Martin Luthore</p>
        </div>
        <div className="slideContent">
          <p style={{ textAlign: "center" }}>Today's Quotes</p>
          <p className="quotes">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos quaerat, id."
          </p>
          <p className="quotesAuthor">- Will Smith</p>
        </div>
        <div className="slideContent">
          <p style={{ textAlign: "center" }}>Today's Quotes</p>
          <p className="quotes">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos quaerat, id."
          </p>
          <p className="quotesAuthor">- Narendra Modi</p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
