import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import axios from 'axios';

import './Location.css';

const { Option } = AutoComplete;



const Complete = () => {
  // const [result, setResult] = useState([]);

  // const handleSearch = value => {
  //   let res = [];

  //   if (!value || value.indexOf('@') >= 0) {
  //     res = [];
  //   } else {
  //     res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
  //   }

  //   setResult(res);
  // };



  const [result, setResult] = useState([]);


  const handleSearch = value => {
    let suggestions = [''];

    if (value) {


      axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + value + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2tlMmhuYjdkMDllbTMwb2I3bWV0NXZyNSJ9.CNUFoIoUh55puHllHgD_Gg')
        .then(res => {
          console.log(res);

          suggestions = res.data.features.map(element => element.place_name);
          console.log("-->", suggestions);
          console.log('rrrr', result);
          setResult(suggestions);

        })

    }


  };

  return (
    <div className="input-location">
      <AutoComplete
        style={{
          width: 200,
        }}
        onSearch={handleSearch}
        placeholder="Enter City, Region, District "
      >
        {result.map(place => (
          <Option key={place} value={place}>
            {place}
          </Option>
        ))}
      </AutoComplete>
    </div>
  );
};

export default Complete;



