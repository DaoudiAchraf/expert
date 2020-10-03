import React, { useState, useEffect } from 'react';
import './Filter.scss';
import { Form, Input, Button, Select, AutoComplete } from 'antd';
import axios from 'axios';


const { Option } = AutoComplete;

const Filter = props => {

    const [result, setResult] = useState([]);
    const handleSearch = value => {
        let suggestions = [''];
        if (value) {
            axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + value + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2tlMmhuYjdkMDllbTMwb2I3bWV0NXZyNSJ9.CNUFoIoUh55puHllHgD_Gg')
                .then(res => {
                    console.log(res);

                    suggestions = res.data.features;
                    console.log("-->", suggestions);
                    console.log('rrrr', result);
                    setResult(suggestions);
                })
        }
    };
    const filter = (query) => {
        // getting words
        query = query.toLowerCase().trim();

        if (query === '') {
            // empty search
            props.setProfilesdata(props.profiles);
            return;
        }
        let terms = query.split(' ');
        // removing duplicates
        terms = removeDuplicates(terms);
        let allResults = new Array();
        terms.forEach((term) => {
            let results = relevantProfiles(term);
            allResults.push(...results);
        });
        props.setProfilesdata(sortByRelevancy(allResults));
    };

    const removeDuplicates = (arr) => {
        let unique = new Set();

        arr.forEach((e) => unique.add(e));
        return Array.from(unique);
    };

    const relevantProfiles = (query) => {
        query = query.toLowerCase().trim();
        let relevant = props.profiles.filter((profile) => {
            return (
                (profile.location.name && profile.location.name.toLowerCase().trim().includes(query))
            );
        });
        return relevant;
    };


    const sortByRelevancy = (searchRes) => {
        let uniqueResults = removeDuplicates(searchRes);
        let profileCount = {};

        searchRes.forEach((profile) => {
            let profileId = profile._id;

            if (profileCount && profileCount[profileId]) {
                profileCount[profileId] += 1;
            } else {
                profileCount[profileId] = 1;
            }
        });

        const sorted = uniqueResults.sort((a, b) => {
            return profileCount[b._id] - profileCount[a._id];
        });
        return sorted;
    };

    return (
        <div className="filter">
            <p>Filter Results</p>
            <div className="mb-18 upper-case">
                <h6>Localisation</h6>
                {/* <AutoComplete
                    style={{ width: '100%' }}
                    onSearch={handleSearch}
                    onChange={(e) => filter(e)}
                    placeholder="Enter City, Region, District "
                >
                    {result.map((place, index) => (
                        <Option key={index} value={place.place_name}>
                            {place.place_name}
                        </Option>
                    ))}
                </AutoComplete> */}
                <Input onChange={(e) => filter(e.target.value)} style={{ width: 300, height: 37.6 }} placeholder="E.g Fouchana" className="select" />
            </div>
            <div className="mb-18 upper-case">
                <h6>type expert</h6>
                <Select size='large' defaultValue="Tolier" style={{ width: 300 }} className="select">
                </Select>
            </div>
            <div className="mb-18 upper-case">
                <h6>marque voiture</h6>
                <Select size='large' defaultValue="Obstercician/Gynecol" style={{ width: 300 }} className="select">
                </Select>
            </div>




        </div>
    );
};


export default Filter;
