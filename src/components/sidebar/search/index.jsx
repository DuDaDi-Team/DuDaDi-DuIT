/* eslint-disable prettier/prettier */
import React from "react";

const SidebarSearch = () => {
    const baseUrl = global.URL;
    return (
        <div className="widget-content">
            <div className="widget-search">
                <form action="#">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Type your keyword..."
                    />
                    <button className="widget-search-btn">
                        <i className="icofont-search"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SidebarSearch;
