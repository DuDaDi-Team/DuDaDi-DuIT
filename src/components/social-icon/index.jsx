/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";

const SocialIcon = ({ path, icon, classOption }) => {
    const baseUrl = global.URL;
    return (
        <a
            className={`${classOption}`}
            href={baseUrl + path}
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className={icon}></i>
        </a>
    );
};

SocialIcon.propTypes = {
    path: PropTypes.string,
    icon: PropTypes.string,
    classOption: PropTypes.string,
};
SocialIcon.defaultProps = {
    classOption: "footer-social-link",
};

export default SocialIcon;
