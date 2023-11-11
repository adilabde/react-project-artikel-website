import { useState } from "react";
import articleImg from "./../assest/images/adel.png";

export default function Article({art}) {
  return (
    <div className="article">
      <img src={art.imgUrl} alt="article_photo" className="article__photo" />
      <p className="article__title">{art.title}</p>
      <p className="article__readingTime">Time to reading: {art.readingTime} min</p>
    </div>
  );
}
