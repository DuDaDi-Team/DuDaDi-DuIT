/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import Team from "../../../components/team";
import HomeData from "../../../data/home.json";

const TeamContainer = ({ classOption }) => {
    
    return (
        <div className={`team-section overflow-hidden`}>
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="testimonial-wrap">
                        <img
                            className=""
                            src={`${process.env.PUBLIC_URL}/images/feature/icon-collaborate.png`}
                            alt="images_not_found"
                        />
                            <SectionTitle
                                classOption="title-section"
                                subTitle=""
                                title="Build, edit and create a custom test framework in minutes"
                            />
                            <h5 className="happy-customer">
                                More over{" "}
                                <span className="font-weight-bold">2500</span>{" "}
                                happy customer
                            </h5>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 mb-7">
                    <div
                        className="testimonial-photo scene mt-10 mt-lg-0"
                        id="scene"
                        >
                            <div data-depth="0.2">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/slider/about-2.png`}
                                    alt="Buznex"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
        </div>
    );
};

TeamContainer.propTypes = {
    classOption: PropTypes.string,
};

TeamContainer.defaultProps = {
    classOption: "section-pb",
};

export default TeamContainer;
