/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const ButtonIconRight = ({ classOption, text, path }) => {
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

export default ButtonIconRight;
