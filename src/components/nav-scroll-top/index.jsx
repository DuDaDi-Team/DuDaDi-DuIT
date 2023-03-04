/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const NavScrollTop = (props) => {
    const baseUrl = global.URL;
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return props.children;
};

export default withRouter(NavScrollTop);
