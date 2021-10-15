import React from 'react';
import './LeagueThumb.css';

const LeagueThumb = (props) => {
    return (
        <div className="thumb">
            <div className="color">
                <img src={props.props} alt="" />
            </div>
        </div>
    );
};

export default LeagueThumb;