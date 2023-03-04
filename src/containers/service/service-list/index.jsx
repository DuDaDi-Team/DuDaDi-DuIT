/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import IconBox from "../../../components/icon-box";
import ServiceBox from "../../../components/service-box";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";
import ServiceData from "../../../data/service.json";
const IconBoxContainer = ({ classOption }) => {
    return (
        <div className={`feature-section position-relative adjust-top ${classOption}`}>
            <img
                className="path-img"
                src={`${process.env.PUBLIC_URL}/images/feature/shape.png`}
                alt="images_not_found"
            />
            <div className="container custom-container">
                 <img
                            className="icon-feature"
                            src={`${process.env.PUBLIC_URL}/images/feature/icon-collaborate.png`}
                            alt="images_not_found"
                        />
                <div className="row g-0 align-items-center">
                    <div className="col-xl-6 col-lg-8 mx-auto mb-3 text-center">
                        <SectionTitle
                            classOption="title-section"
                            subTitle=""
                            title="How it Works"
                            excerptClassOption="mb-10"
                            excerpt="Pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or
                            desires to obtain"
                        />
                    </div>

                    <div className="col-12">
                        <div id="grid" className="grid row mb-n7">
                            {ServiceData[2].iconBox &&
                                ServiceData[2].iconBox.map((single, key) => {
                                    return <ServiceBox key={key} data={single} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

IconBoxContainer.propTypes = {
    classOption: PropTypes.string,
};

IconBoxContainer.defaultProps = {
    classOption: "section-pb",
};

export default IconBoxContainer;
