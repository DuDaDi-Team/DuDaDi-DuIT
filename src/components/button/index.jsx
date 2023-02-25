/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const Button = ({ classOption, text, path }) => {
    // process.env.PUBLIC_URL
    const baseUrl = global.URL;

    return (
        <React.Fragment>
            <Link
                to={baseUrl + path}
                className={`${classOption}`}
            >
                {text}
            </Link>
        </React.Fragment>
    );
};

Button.propTypes = {
    classOption: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
};
Button.defaultProps = {
    classOption: "btn",
};

export default Button;
