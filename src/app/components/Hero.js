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
            img: "/dpic1.jpg",
            title: "Ages 7-9",
            mainTitle: "Beginner Coders",
            price: "$55",
        },
        {
            id: 1,
            img: "/dpic3.jpg",
            title: "Ages 11+",
            mainTitle: "Game Development",
            price: "$55",
        },
        {
            id: 2,
            img: "/dpic2.jpg",
            title: "Ages 12+",
            mainTitle: "Web Wizards",
            price: "$55",
        },
        {
            id: 2,
            img: "/dpic4.jpg",
            title: "Ages 13+",
            mainTitle: "App Creators",
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
