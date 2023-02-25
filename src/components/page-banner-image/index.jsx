/* eslint-disable prettier/prettier */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Parallax from "parallax-js";

const PageBannerImage = ({ image }) => {
    const sceneEl = useRef(null);
    let validateDataImage = image.substring(0, 1);;
    let dataImage = image.substring(1, image.length);
    if(validateDataImage !== "/") {
        dataImage = image.substring(1, image.length);
    } else {
        dataImage = image;
    }
    // console.log("dataImage", image.substring(0, 1));

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);

    // process.env.PUBLIC_URL
    const baseUrl = global.URL;

    return (
        <div
            className="banner-content scene banner-img"
            id="scene"
            ref={sceneEl}
        >
            <div data-depth="0.2">
                <img src={baseUrl + dataImage} alt="img" />
            </div>
        </div>
    );
};

PageBannerImage.propTypes = {
    image: PropTypes.string,
};

export default PageBannerImage;
