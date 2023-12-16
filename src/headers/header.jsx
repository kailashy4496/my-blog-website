import React from "react";
import Slider from "./slider";

const Header = () => {
  const images = [
    "https://cdn.wallpapersafari.com/60/51/P1SiT4.jpg",
    "https://www.teahub.io/photos/full/60-608107_maldives-wallpaper-4k.jpg",
    "https://webunwto.s3.eu-west-1.amazonaws.com/2021-05/unwto-opens-call-for-best-tourism-villages.jpg?VersionId=QUl2_d9rtNzS1rrZtAzueD85hbr0aiqV",
    "https://cdn.wallpapersafari.com/69/99/Fd3ESc.jpg",
  ];
  return (
    <div className="">
      <Slider images={images}/>
    </div>
  );
};

export default Header;
