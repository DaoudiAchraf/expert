import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const { Option } = AutoComplete;

const Complete = () => {
  const [result, setResult] = useState([]);

  const handleSearch = value => {
    let res = [];

    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }

    setResult(res);
  };

  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      onSearch={handleSearch}
      placeholder="input here"
    >
      {result.map(email => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </AutoComplete>
  );
};

export default Complete; 


  // const [result, setResult] = useState([]);

  // const handleSearch = value => {
  //   let suggestions = [''];

  //   if (!value) {
  //     suggestions = ['Tunis','Nabeul','Sfax','Sousse'];
  //   } else {
  //     axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+value+'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2tlMmhuYjdkMDllbTMwb2I3bWV0NXZyNSJ9.CNUFoIoUh55puHllHgD_Gg')
  //     .then(res =>{
  //         console.log(res.data.features);

  //         suggestions=res.data.features.map(element => element.place_name);
  //         console.log("-->",typeof(suggestions[0]));
  //         suggestions = [res.data.features]; setResult(suggestions);
          
  //     })
  //     setResult(suggestions);
  //   }


  // };

