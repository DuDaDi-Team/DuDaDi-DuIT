/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";

const ServiceDetails = ({ data }) => {
    // process.env.PUBLIC_URL
    const baseUrl = global.URL;

    return (
        <div className="service-wrap">
            <div className="service-thumb bg-light text-center">
                <img src={`${baseUrl}/${data.image}`} alt="" />
            </div>
            <div className="title-section">
                <h3 className="title pb-2">{data.title}</h3>
                <div className="service-content-wrap">
                    {data.body.map((single, key) => {
                        return (
                            <div
                                className="desc"
                                key={key}
                                dangerouslySetInnerHTML={{ __html: single }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

ServiceDetails.propTypes = {
    data: PropTypes.object,
};

export default ServiceDetails;
