/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { flatDeep, slugify, containsObject } from "../../../utils";

const SidebarTag = ({ data }) => {
    const tags = data.map((item) => {
        return item.tags;
    });
    let singleTagArray = flatDeep(tags);
    let allTags = [];
    singleTagArray.forEach((tag) => {
        const obj = {
            title: tag.trim(),
            slug: slugify(tag),
        };
        const objIndex = containsObject(obj, allTags);
        if (objIndex !== -1) {
            allTags[objIndex] = {
                title: tag.trim(),
                slug: slugify(tag),
            };
        } else {
            allTags.push(obj);
        }
    });
    const baseUrl = global.URL;
    return (
        <div className="widget-tags">
            {allTags.map((single, i) => {
                return (
                    <Link
                        key={i}
                        className="widget-tag-link"
                        to={baseUrl + `/tag/${single.slug}`}
                    >
                        {single.title}
                    </Link>
                );
            })}
        </div>
    );
};

SidebarTag.propTypes = {
    data: PropTypes.array,
};

export default SidebarTag;
