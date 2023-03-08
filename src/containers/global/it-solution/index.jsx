/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import IconBox from "../../../components/icon-box";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";

const IconItSolution = ({ classOption }) => {
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
                    <div className="col-xl-12 col-lg-8 mx-auto mb-3 text-center">
                        <SectionTitle
                            classOption="title-section"
                            subTitle=""
                            title="IT Solution"
                            excerptClassOption="mb-10"
                            excerpt="Dengan adanya IT Solution, operasional perusahaan akan berjalan dengan mudah. Sehingga, Anda dapat lebih berfokus pada pengembangan bisnis. Melalui artikel kali ini, Anda akan memahami apa itu IT Solution dan apa saja layanan bisnis yang disediakannya untuk membantu perkembangan perusahaan Anda."
                        />
                    </div>

                    <div className="col-12">
                        <div id="grid" className="grid row mb-n7">
                            {HomeData[4].iconBox3 &&
                                HomeData[4].iconBox3.map((single, key) => {
                                    return <IconBox key={key} data={single} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

IconItSolution.propTypes = {
    classOption: PropTypes.string,
};

IconItSolution.defaultProps = {
    classOption: "section-pb",
};

export default IconItSolution;
