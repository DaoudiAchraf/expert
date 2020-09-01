import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import Search from '../../components/search/Search';
import Navigation from '../../components/navigation/Navigation';
import SortBy from '../../components/sortBy/sortBy';
import ExpertCard from '../../components/expertCard/expertCard';
import ExpertMap from '../../components/Map-section/Map';

import { Select, Input } from 'antd';


import './SearchExpertsPage.scss';

import { connect } from 'react-redux';
import {getProfiles} from '../../actions/profile-actions/actions';


const SearchExpertsPage = ({getProfiles}) => {

        useEffect(() => {
            getProfiles();
           // console.log("ddd",user);
        }, []);
        const profiles = useSelector(state => state.profileReducer.profiles);
         
        

    
        

    return (
        <div className="search-experts">
            <Search />
           
            <div className="main">
                <div className="experts-list" >
                    <Navigation />
                    <SortBy show={true} />
                    <div className="experts" id="style-2">
                    {
                        profiles.map(profile =>
                            <ExpertCard key={profile._id} infos={profile}/>
                           )
                    }
                        
                    </div>
                </div>
                <div className="map">
                    <ExpertMap />
                </div>
            </div>
        </div>
    );
};


export default connect(null,{getProfiles})(SearchExpertsPage);
