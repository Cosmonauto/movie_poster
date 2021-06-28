import React from 'react'
import { Carousel } from '3d-react-carousal';


export default function Carousal() {
    let slides = [
        <img src="https://cdn.wallpapersafari.com/16/81/Z0BPWR.jpg" alt="1" />,
        <img src="https://cdn.wallpapersafari.com/16/81/Z0BPWR.jpg" alt="2" />,
        <img src="https://wallpapercave.com/wp/wp5435701.jpg" alt="3" />,
        <img src="https://images3.alphacoders.com/809/809912.jpg" alt="4" />,
        <img src="https://wallpapermemory.com/uploads/606/dwayne-johnson-wallpaper-full-hd-1920x1080-188754.jpg" alt="5" />];
    return (
        <div>
            <Carousel slides={slides} autoplay={true} interval={5000} />
        </div>
    )
}
