/* eslint-disable prettier/prettier */
import React from "react";
import Intro from "../../../components/intro";
import HomeData from "../../../data/home.json";

const IntroContainer = () => {
    const baseUrl = global.URL;
    return (
        <div className="section position-relative">
            <div className="hero-shape1">
                {<img
                    className="hero-shape1-image"
                    src={`${baseUrl}/images/slider/shape/background-banner.png`}
                    alt="shape"
                /> }
            </div>
            <div className="hero-shape2">
                {/* <img
                    src={`${baseUrl}/images/slider/shape/shape2.png`}
                    alt="shape"
                /> */}
            </div>
            <Intro data={HomeData[0].slider[0]} />
        </div>
    );
};

export default IntroContainer;
