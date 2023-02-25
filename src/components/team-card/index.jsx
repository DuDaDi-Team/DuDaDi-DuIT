/* eslint-disable prettier/prettier */
import PropTyps from "prop-types";

const TeamCard = ({ data }) => {
    // process.env.PUBLIC_URL
    const baseUrl = global.URL;
    const dataImage = data.thumb.substring(1, data.thumb.length);

    return (
        <div className="team-card">
            <div className="thumb">
                <img src={baseUrl + dataImage} alt="img" />
            </div>
            <div className="content">
                <h3 className="title">{data.name}</h3>
                <span>{data.designation}</span>
            </div>
        </div>
    );
};

TeamCard.propTypes = {
    data: PropTyps.object,
};

export default TeamCard;
