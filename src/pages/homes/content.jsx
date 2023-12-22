import React from "react";
import Likebtn from "./common/likebtn";
import BeachList from "../beachList";

const Content = () => {
  return (
    <div className="beach-content">
      <h1 className="beach-heading">Welcome to Sea Beaches</h1>
      <div className="beach-images">
        <div className="box box1">
          <img
            src="https://static2.tripoto.com/media/filter/tst/img/371512/TripDocument/1493902235_screenshot_2017_05_04_17_03_25_1.png"
            alt=""
          />
          <div className="location">
            <div className=""></div>
            <div className="">Tarkarli Beach Maharashtra</div>
            <Likebtn />
          </div>
        </div>
        <div className="box box2">
          <img
            src="https://www.makemytraveling.com/Images/1/MarariBeach-107321.jpg"
            alt=""
          />
          <div className="location">
            <div className=""></div>
            <div className="">Marari Beach Kerala</div>
            <Likebtn />
          </div>
        </div>
        <div className="box box3">
          <img
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div className="location">
            <div className=""></div>
            <div className="">Baga Beach Goa</div>
            <Likebtn />
          </div>
        </div>
        <div className="box box4">
          <img
            src="https://www.holidify.com/images/cmsuploads/compressed/Kaup-Beach-and-Light-house-in-Udupi-85085-pixahive-1024x768_20220208153918.jpg"
            alt=""
          />
          <div className="location">
            <div className=""></div>
            <div className="">Kaup Beach Karnataka</div>
            <Likebtn />
          </div>
        </div>
      </div>
      <div style={{height:'700px'}}>
        <BeachList />
      </div>
    </div>
  );
};

export default Content;
