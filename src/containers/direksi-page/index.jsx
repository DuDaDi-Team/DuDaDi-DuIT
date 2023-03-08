/* eslint-disable prettier/prettier */
import React from "react";
import TeamCard from "../../components/team-card";
import TeamData from "../../data/team.json";
import SectionTitle from "../../components/section-title";

const DireksiPageContainer = () => {
    return (
        <div className="service-section section-py">
            <div className="container adjust-margin">
            <img
                            className="icon-feature"
                            src={`${process.env.PUBLIC_URL}/images/feature/icon-collaborate.png`}
                            alt="images_not_found"
                        />
                        <div className="col-xl-12 col-lg-8 mx-auto mb-3 text-center">
                        <SectionTitle
                            classOption="title-section"
                            subTitle=""
                            title="Direksi"
                            excerptClassOption="mb-10"
                            excerpt=""
                        />
                    </div>
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mb-n7">
                    {TeamData[0].direksi &&
                        TeamData[0].direksi.map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col col-md-6 col-lg-4 col-xl-3 text-center mb-7"
                                >
                                    <TeamCard key={key} data={single} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default DireksiPageContainer;
