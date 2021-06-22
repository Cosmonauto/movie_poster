import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { classes } from "istanbul-lib-coverage";
import classesCss from "./heroCarousel.module.css";
import NextIcon from "../../assets/icons/forward-button.png";
import PrevIcon from "../../assets/icons/rewind-button.png";

export default function HeroCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "https://cdn.mos.cms.futurecdn.net/w78sdW5ewM62ZzSCbue3N.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "https://ichef.bbci.co.uk/images/ic/640x360/p09c88sz.jpg",
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
