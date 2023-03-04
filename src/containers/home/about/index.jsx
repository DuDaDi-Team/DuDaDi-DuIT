/* eslint-disable prettier/prettier */
import { useEffect, useRef } from "react";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import IconBox from "../../../components/icon-box";


const HomeAboutContainer = () => {
    return (
        <div className="about-us position-relative">
            <div className="container">
                <div className="row g-0 align-items-center about-center">
                    <div className="container custom-container">
<img
                            className="icon-feature"
                            src={`${process.env.PUBLIC_URL}/images/feature/icon-collaborate.png`}
                            alt="images_not_found"
                        />
                    <div className="col-xl-6 col-lg-8 mx-auto mb-3 text-center">
                        <SectionTitle
                            classOption="title-section"
                            subTitle=""
                            title="Watch our Project Video"
                            excerptClassOption="mb-10"
                            excerpt="Pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or
                            desires to obtain"
                        />
                    </div>
                </div>
                <div className="row mb-n7" style={ {justifyContent:"space-around"}}>
                    <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="about-content">
                        <img
                                    className="img-about"
                                    src={`${process.env.PUBLIC_URL}/images/feature/picture-1.jpg`}
                                    alt="bg-shape"
                                />
                        </div>
                    </div>
                      <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="about-content">
                            <div className="prj-icon">
                                <img
                                    className="icon-about"
                                    src={`${process.env.PUBLIC_URL}/images/feature/svg-export-1.png`}
                                    alt="bg-shape"
                                />
                                <div className="text-prj">
                                    <h2 style={{fontSize:"20px"}}>Lots of Pre-Made Widgets</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna sapien, ullamcorper id varius a</span>
                                </div>
                            </div>
                            <div className="prj-icon">
                                <img
                                    className="icon-about"
                                    src={`${process.env.PUBLIC_URL}/images/feature/svg-export-1.png`}
                                    alt="bg-shape"
                                />
                                <div className="text-prj">
                                    <h2 style={{fontSize:"20px"}}>Fully Responsive</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna sapien, ullamcorper id varius a</span>
                                </div>
                                
                            </div>
                            <div className="prj-icon">
                                <img
                                    className="icon-about"
                                    src={`${process.env.PUBLIC_URL}/images/feature/svg-export-1.png`}
                                    alt="bg-shape"
                                />
                                <div className="text-prj">
                                    <h2 style={{fontSize:"20px"}}>Lots of Illustration Option</h2>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna sapien, ullamcorper id varius a</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                       
            </div>
            <img
                className="about-shape"
                src={`${process.env.PUBLIC_URL}/images/about/shape.png`}
                alt="bg-shape"
            />
        </div>
    );
};

export default HomeAboutContainer;
