/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Logo = ({ image, classOption }) => {
    // process.env.PUBLIC_URL
    const baseUrl = global.URL;

    return (
        <Link className={`${classOption}`} to={baseUrl + "/"}>
            <img
                className="logo-main"
                src={image}
                alt="Logo"
            />
        </Link>
    );
};

Logo.propTypes = {
    image: PropTypes.string,
    classOption: PropTypes.string,
};

Logo.defaultProps = {
    classOption: "text-center",
};

export default Logo;
