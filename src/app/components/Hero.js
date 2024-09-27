"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/pic6.jpg",
            title: "HTML For kids",
            mainTitle: "Web basics and core",
            price: "$55",
        },
        {
            id: 1,
            img: "/pic5.jpg",
            title: "CSS For kids",
            mainTitle: "Styling Web pages",
            price: "$55",
        },
        {
            id: 2,
            img: "/pic4.jpg",
            title: "Javascript for kids",
            mainTitle: "For Realtime functionality",
            price: "$55",
        },
    ];

    return (
        <div>
            <div className="container pt-6 lg:pt-0 custom-slider-container">
                <Slider {...settings}>
                    {slideData.map((item) => {
                        return (
                            <Slide
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                mainTitle={item.mainTitle}
                                price={item.price}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
