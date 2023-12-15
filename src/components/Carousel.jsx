import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// complete the function below:
function Carousel() {
  const [CurrentImg, setCurrentImg] = useState(0);
  const { img, title, subtitle } = images[CurrentImg];

  const updateImage = (newIndex) => setCurrentImg(Math.max(0, Math.min(newIndex, images.length - 1)));

  return (
    <div className="carousel">
      <div className="carouselImg" style={{ backgroundImage: `url(${img})` }}>
        <div className="leftBtn" onClick={() => updateImage(CurrentImg - 1)}>
          <ArrowBackIosIcon style={{ fontSize: 24 }} />
        </div>
        <div className="center">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="rightBtn" onClick={() => updateImage(CurrentImg + 1)}>
          <ArrowForwardIosIcon style={{ fontSize: 24 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;