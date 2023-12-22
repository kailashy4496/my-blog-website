import React from "react";

const Header = () => {
  const images = [
    "https://www.teahub.io/photos/full/60-608107_maldives-wallpaper-4k.jpg",
  ];
  return (
    <div className="home">
      {images.map((image, index) => {
        return (
          <div className="image" key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Header;
