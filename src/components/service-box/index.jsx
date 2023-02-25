/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";

const ServiceBox = ({ data }) => {
    // process.env.PUBLIC_URL
    const baseUrl = global.URL;
    const dataImage = data.icon.substring(1, data.icon.length);

    return (
        <div className="service-media">
            <img
                className="logo"
                src={baseUrl + dataImage}
                alt=" service logo"
            />
            <div className="service-media-body">
                <h4 className="title">
                    <Link
                        to={
                            baseUrl +
                            `/service-details/${slugify(data.id)}`
                        }
                    >
                        {data.title}
                    </Link>
                </h4>
                <p>{data.excerpt}</p>
            </div>
        </div>
    );
};

ServiceBox.propTypes = {
    data: PropTypes.object,
};

export default ServiceBox;
