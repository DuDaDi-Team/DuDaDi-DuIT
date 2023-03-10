/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";

const Testimonial = ({ data }) => {
    const baseUrl = global.URL;
    const dataImage = data.authorThumb.substring(1, data.authorThumb.length);
    return (
        <div className="testimonial-slide-item swiper-slide">
            <span className="quote zmdi zmdi-quote"></span>
            <p className="testimonial-text mt-2 mb-5">{data.excerpt}</p>
            <div className="avater d-flex">
                <div className="avater-profile">
                    <img
                        src={baseUrl + dataImage}
                        alt="avater"
                    />
                </div>
                <div className="avater-info">
                    <p>{data.name}</p>
                    <span>{data.designation}</span>
                </div>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    data: PropTypes.object,
};

export default Testimonial;
