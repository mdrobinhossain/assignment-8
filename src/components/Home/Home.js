import React from 'react';
import { useState,useEffect } from 'react';
import League from '../League/League';
import './Home.css';
import Stadium from '../Stadium/Stadium';

const Home = () => {
    const [leagues,setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
        .then(res => res.json())
        .then(data => setLeagues(data.countrys));
    }, [])
    return (<>
            <Stadium></Stadium>
            <div className="leagues">
                {
                    leagues.map(league => <League key={league.idLeague} league={league}></League>)
                }
            </div>
            </>
    );
};

export default Home;