import React from 'react';

import PropTypes from 'prop-types';


export default function SetTeam({
    team: {
        img, alt, name, title, work, icon, icons,
    },
}) {
    return (
        <div className="show__team">
            <div className="the__team">
                <div className="team__icon">
                    <img className="icon__image" src={icon} alt={`Work ${icons}`} />
                </div>
                <div className="image__team">
                    <img className="image" src={img} alt={`Work ${alt}`} />
                </div>
                <div className="team__info">
                    <div className="team__details">
                        <h2 className="team__name">{name}</h2>
                        <h4 className="job__person">{title}</h4>
                    </div>
                    <div className="team__jop">
                        <div className="team__box">
                            <h5 className="team__work">{work}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SetTeam.defaultProps = {
    team: [],
};

SetTeam.propTypes = {
    team: PropTypes.objectOf(PropTypes.string),
};
