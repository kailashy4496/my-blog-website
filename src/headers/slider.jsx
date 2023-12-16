import React from "react";
import "../styles/slider.css";

const Slider = ({ images }) => {

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} className="image" />
        </div>
      ))}
    </div>
  );
};

export default Slider;
