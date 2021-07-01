import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import classesCss from "./heroCarousel.module.css";
import NextIcon from "../../assets/icons/forward-button.png";
import PrevIcon from "../../assets/icons/rewind-button.png";

export default function HeroCarousel(props) {
  var items = [
    {
      img: "https://cdn.wallpapersafari.com/64/53/uOopMD.jpg",
    },
    {
      img: "https://i2.wp.com/wallofsoundau.com/wp-content/uploads/2021/04/mortal-kombat.jpg?fit=1920%2C1080&ssl=1",
    },
    {
      name: "Join us today, and get a discount on your first booking!",
      description: "Or invite your friends and get a platinum member card to never miss a discount",
      img: "https://wallpaperaccess.com/full/2820572.jpg",
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
