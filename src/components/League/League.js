import React from 'react';
import { Link } from 'react-router-dom';
import './League.css';

const League = (props) => {
    const {strLeague, strSport, strBadge, idLeague} = props.league;
    return (
        <div className="league">
            <img src={strBadge} alt="League-Logo" />
            <h2>{strLeague}</h2>
            <p>Sports Type: {strSport}</p>
            
            <Link to={`/league/${idLeague}`}><button>Explore</button></Link>
        </div>
    );
};

export default League;