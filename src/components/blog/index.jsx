/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { slugify } from "../../utils";

const BlogGrid = ({ data, classOption }) => {
    const baseUrl = global.URL;
    return (
        <div className="blog-card">
            <div className={`thumb bg-light text-center ${classOption}`}>
                <Link to={baseUrl + `/blog-details/${data.id}`}>
                    <img
                        src={`${baseUrl}/${data.media.gridImage}`}
                        alt="img"
                    />
                </Link>
            </div>
            <div className="blog-content">
                <Link
                    to={
                        baseUrl +
                        `/author/${slugify(data.author)}`
                    }
                >
                    <span className="blog-meta author">{data.author}</span>
                </Link>
                <span className="separator">-</span>
                <Link
                    to={baseUrl + `/date/${slugify(data.date)}`}
                >
                    <span className="blog-meta date">{data.date}</span>
                </Link>
                <h3 className="title">
                    <Link
                        to={baseUrl + `/blog-details/${data.id}`}
                    >
                        {data.title}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

BlogGrid.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string,
};

BlogGrid.defaultProps = {
    classOption: "thumb",
};

export default BlogGrid;
