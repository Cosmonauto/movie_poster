import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import classesCss from "./heroCarousel.module.css";
import NextIcon from "../../assets/icons/forward-button.png";
import PrevIcon from "../../assets/icons/rewind-button.png";

export default function HeroCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "https://free4kwallpapers.com/uploads/originals/2019/11/20/bladerunner--movie-scene-wallpaper.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1584638663178-SW29SW31WBZ7NSNB0CKW/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/image-asset.jpeg?format=2500w",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "https://images.alphacoders.com/385/thumb-1920-3853.jpg",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "https://wallpapercave.com/wp/wp3982951.jpg",
    },
  ];

  return (
    <div className={classesCss.heroDiv}>
      <Carousel
        NextIcon={
          <img
            src={NextIcon}
            alt="NextIcon"
            className={classesCss.sliderIcons}
          />
        }
        PrevIcon={
          <img
            src={PrevIcon}
            alt="PrevIcon"
            className={classesCss.sliderIcons}
          />
        }
        fullHeightHover={false}
        //   indicatorContainerProps={{
        //     style: {
        //       marginTop: "50px", // 5
        //       textAlign: "center", // 4
        //     },
        //   }} -- точки внизу
        className={classesCss.heroCarousel}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <Paper style={{ backgroundColor: "transparent" }}>
      <div className={classesCss.heroImg}>
        <div className={classesCss.heroText}>
          <h1>{props.item.name}</h1>
          <h3>{props.item.description}</h3>
        </div>
        <img src={props.item.img} alt="img" />
      </div>
    </Paper>
  );
}
