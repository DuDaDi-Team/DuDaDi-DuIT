/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
    const baseUrl = global.URL;
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta
                name="description"
                content="DITEK &amp; Dunia Invovasi Teknologi"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
};

// eslint-disable-next-line prettier/prettier
export default SEO;
