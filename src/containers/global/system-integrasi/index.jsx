/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import IconBox from "../../../components/icon-box";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";

const IconSystemIntegrasi = ({ classOption }) => {
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
                            title="Sistem Integrasi"
                            excerptClassOption="mb-10"
                            excerpt="DITEK telah bekerja sama dengan sebagian besar organisasi yang inspiratif dan berpengaruh dari seluruh dunia untuk mengatasi masalah kemajuan teknologi. DITEK berdedikasi untuk membantu dan berperan dalam memajukan teknologi di dunia agar lebih memudahkan para generasi muda sekarang dalam kemampuan mereka dan memaksimalkan potensi mereka sepenuhnya."
                        />
                    </div>

                    <div className="col-12">
                        <div id="grid" className="grid row mb-n7">
                            {HomeData[5].iconBox4 &&
                                HomeData[5].iconBox4.map((single, key) => {
                                    return <IconBox key={key} data={single} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

IconSystemIntegrasi.propTypes = {
    classOption: PropTypes.string,
};

IconSystemIntegrasi.defaultProps = {
    classOption: "section-pb",
};

export default IconSystemIntegrasi;
