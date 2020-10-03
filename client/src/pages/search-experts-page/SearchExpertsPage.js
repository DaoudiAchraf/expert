import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/search/Search';
import Navigation from '../../components/navigation/Navigation';
import SortBy from '../../components/sortBy/sortBy';
import ExpertCard from '../../components/expertCard/expertCard';
import ExpertMap from '../../components/Map-section/Map';
import './SearchExpertsPage.scss';

import {connect} from 'react-redux';
import { getProfiles } from '../../actions/profile-actions/actions';

const SearchExpertsPage = ({getProfiles}) => {
    const [center, setCenter] = useState([36.807146, 10.145529]);
    const [profilesdata, setProfilesdata] = useState([]);
    const [search, setSearch] = useState("");
    const profiles = useSelector(state => state.profileReducer.profiles);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("profiles",profiles)
        //console.log(props.profiless);
        // if (profiles.length == 0) getProfiles();
        getProfiles();
    }, []);
    useEffect(() => {
        setProfilesdata(profiles);
    }, [profiles]);
    return (
        <div className="search-experts">
            <Search profiles={profiles} setProfilesdata={setProfilesdata} profilesdata={profilesdata} setSearch={setSearch} />
            <div className="main">
                <div className="experts-list">
                    <Navigation />
                    <SortBy show={true} />
                    <div className="experts" id="style-2">
                        {
                            profilesdata.map((profile, index) =>
                                <ExpertCard index={index} setCenter={setCenter} key={profile._id} infos={profile} />
                            )
                        }

                    </div>
                </div>
                <div className="map">
                    <ExpertMap profiles={profiles} center={center} setCenter={setCenter} />
                </div>
            </div>
        </div>
    );
};

export default connect(null, { getProfiles })(SearchExpertsPage);
