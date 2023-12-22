import React, { useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import "../../../styles/home.css";

const Likebtn = () => {
  const [like, setLike] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disLike, setDisLike] = useState(false);

  const increaseValue = () => {
    setLike(like + 1);
    setLiked(!liked);
  };

  const decreaseValue = () => {
    setDisLike(!disLike);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100px",
        border: "1px solid black",
        borderRadius: "20px",
        justifyContent: "space-between",
        padding: '2px'
      }}
    >
      <div onClick={increaseValue} className="liked-btn">
        <AiOutlineLike className={`like-btn ${liked ? "liked" : ""}`} />
        <span className="numbers">{like}</span>
      </div>
      <div
        style={{
          marginTop: "2px",
        }}
      >
        |
      </div>
      <div
        onClick={decreaseValue}
        className={`change-color ${disLike ? "clicked" : ""}`}
      >
        <AiOutlineDislike />
      </div>
    </div>
  );
};

export default Likebtn;
