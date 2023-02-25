/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";

const Brand = ({ data }) => {
    // process.env.PUBLIC_URL
    const baseUrl = global.URL;
    const dataImage = data.image.substring(1, data.image.length);
    return (
        <div className="single-brand">
            <img src={baseUrl + dataImage} alt="brand logo" />
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
