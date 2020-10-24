import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Search from '../../components/search/Search';
import Navigation from '../../components/navigation/Navigation';
import SortBy from '../../components/sortBy/sortBy';
import ExpertCard from '../../components/expertCard/expertCard';
import ExpertMap from '../../components/Map-section/Map';
import './SearchExpertsPage.scss';

import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile-actions/actions';

const SearchExpertsPage = ({ profiles, getProfiles }) => {
    const [center, setCenter] = useState([36.807146, 10.145529]);
    const [profilesdata, setProfilesdata] = useState([]);
    const [search, setSearch] = useState("");
    // const profiles = useSelector(state => state.profileReducer.profiles);
    useEffect(() => {
        console.log(profiles);
        if (profiles.length == 0) {
            console.log('ala mibon')
            getProfiles();
        }
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
                    <SortBy resultsCount={profilesdata.length} show={true} />
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
const mapStateToProps = reduxStore => {
    return {
        profiles: reduxStore.profileReducer.profiles
    };
};
export default connect(mapStateToProps, { getProfiles })(SearchExpertsPage);
