/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import IconBox from "../../../components/icon-box";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";

const IconPartner = ({ classOption }) => {
    return (
        <div className={`feature-section position-relative ${classOption}`}>
            <img
                className="path-img"
                src={`${process.env.PUBLIC_URL}/images/feature/shape.png`}
                alt="images_not_found"
            />
            <div className="container custom-container adjust-margin">
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
                            title="Partner Kami"
                            excerptClassOption="mb-10"
                            excerpt="Pleasure rationally encounter consequences that are extremely
                            painful. Nor again is there anyone who loves or pursues or
                            desires to obtain"
                        />
                    </div>

                    <div className="col-12">
                        <div id="grid" className="grid row mb-n7">
                            {HomeData[2].iconBox &&
                                HomeData[2].iconBox.map((single, key) => {
                                    return <IconBox key={key} data={single} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

IconPartner.propTypes = {
    classOption: PropTypes.string,
};

IconPartner.defaultProps = {
    classOption: "section-pb",
};

export default IconPartner;
