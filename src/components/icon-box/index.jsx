/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IconBox = ({ data }) => {
    // process.env.PUBLIC_URL
    const baseUrl = global.URL;
    const dataImage = data.icon.substring(1, data.icon.length);
    
    return (
        <div className={data.className}>
            <div className="feature-card bg-light">
                <span className="card-shape card-shape-light"></span>
                <span className="card-shape card-shape-dark"></span>
                <img
                    className="logo"
                    src={baseUrl + dataImage}
                    alt=" feature logo"
                />
                <h4 className="title my-6">
                    <Link to={baseUrl + "/service-details/1"}>
                        {data.title}
                    </Link>
                </h4>
                <p>{data.excerpt}</p>
            </div>
        </div>
    );
};

IconBox.propTypes = {
    data: PropTypes.object,
};

export default IconBox;
