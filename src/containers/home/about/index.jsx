/* eslint-disable prettier/prettier */
import { useEffect, useRef } from "react";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import IconBox from "../../../components/icon-box";


const HomeAboutContainer = () => {
    return (
        <div className="about-us position-relative">
            <div className="container">
                <div className="row g-0 align-items-center">
                    <img
                            className="icon-feature-2"
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
                <div className="row mb-n7">
                    <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="ABOUT US"
                                title="Best 
                                <span class='text-primary'>
                                    Digital Agency
                                </span>
                                <br className='d-none d-xl-block' />
                                in the Town"
                            />
                            <span className="date-meta">
                                Scince 2001 <span className="hr"></span>
                            </span>
                            <p className="mb-5">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there
                            </p>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Learn more"
                                path="/about"
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
                                <div>
                                    <h2>test</h2>
                                    <span>test</span>
                                </div>
                            </div>
                            <div className="prj-icon">
                                <img
                                    className="icon-about"
                                    src={`${process.env.PUBLIC_URL}/images/feature/svg-export-1.png`}
                                    alt="bg-shape"
                                />
                                <span>test</span>
                                
                            </div>
                            <div className="prj-icon">
                                <img
                                    className="icon-about"
                                    src={`${process.env.PUBLIC_URL}/images/feature/svg-export-1.png`}
                                    alt="bg-shape"
                                />
                                <span>test</span>
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
