import React from 'react';

import Search from '../../components/search/Search';
import Navigation from '../../components/navigation/Navigation';
import SortBy from '../../components/sortBy/sortBy';
import ExpertCard from '../../components/expertCard/expertCard';
import MapJibFidk from '../../components/Map-section/MapJibFidk';

import { Select, Input } from 'antd';


import './SearchExpertsPage.scss';


const SearchExpertsPage = () => {
    return (
        <div className="search-experts">
            <Search />
            <div className="main">
                <div className="experts-list" >
                    <Navigation />
                    <SortBy show={true} />
                    <div className="experts" id="style-2">
                        <ExpertCard />
                        <ExpertCard />
                        <ExpertCard />
                        <ExpertCard />
                        <ExpertCard />
                        <ExpertCard />
                        <ExpertCard />
                        <ExpertCard />
                    </div>
                </div>
                <div className="map">
                    <MapJibFidk />
                </div>

            </div>
        </div>
    );
};


export default SearchExpertsPage;
