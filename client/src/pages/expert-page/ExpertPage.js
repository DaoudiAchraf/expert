import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './ExpertPage.scss';
import Navigation from '../../components/navigation/Navigation';
import SortBy from '../../components/sortBy/sortBy';
import Filter from '../../components/filter/Filter';
import ExpertCard from '../../components/expertCard/expertCard';
import Paginations from '../../components/Pagination/pagination';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile-actions/actions';


const ExpertPage = props => {
    const [center, setCenter] = useState([36.807146, 10.145529]);
    const [profilesdata, setProfilesdata] = useState([]);
    const profiles = useSelector(state => state.profileReducer.profiles);
    useEffect(() => {
        console.log(profiles)
        if (profiles.length == 0) props.getProfiles();
        console.log(profiles)
    }, []);
    useEffect(() => {
        setProfilesdata(profiles);
    }, [profiles]);
    return (
        <div className="expert-page">
            <Navigation />
            <div className="main">
                <Filter profiles={profiles} setProfilesdata={setProfilesdata} profilesdata={profilesdata} />
                <div className="cardd">
                    <SortBy resultsCount={profilesdata.length} show={false} />
                    <div className="experts">
                        {
                            profilesdata.map((profile, index) =>
                                <ExpertCard index={index} setCenter={setCenter} key={profile._id} infos={profile} />
                            )
                        }
                    </div>
                    <div className="pagination">
                        <Paginations />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default connect(null, { getProfiles })(ExpertPage);
