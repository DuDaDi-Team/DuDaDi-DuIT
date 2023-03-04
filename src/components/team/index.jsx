/* eslint-disable prettier/prettier */
import PropTyps from "prop-types";

const Team = ({ data }) => {
    const baseUrl = global.URL;
    const dataImage = data.thumb.substring(1, data.thumb.length);
    return (
        <div className="new-team-members-list">
            <img src={baseUrl + dataImage} alt="images" />
            <h3 className="title">{data.name}</h3>
            <span>{data.designation}</span>
        </div>
    );
};

Team.propTypes = {
    data: PropTyps.object,
};

export default Team;
