import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Select,AutoComplete } from 'antd';
import './Profile-builder.css';
import { connect } from "react-redux";
import { createProfile } from '../../actions/profile-actions/actions';
import axios from 'axios';

const { Option } = AutoComplete;

const ProfileBuilderForm = props => {
  const user = useSelector(state => state.authReducer.user);
        
  useEffect(() => {
    console.log(user);
  }, []);

  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(user);
    console.log(user);
  }, [user]);
  const children = [];


  const { TextArea } = Input;

  const handleChange = (value) => {
    //console.log(value);

  }

  const onChange = e => {
    //console.log(e.target.value);
  };


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

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        
        const { bio, speciality, certifications ,location} = values;
       // console.log(bio,speciality,certifications,location);

        console.log('Received values of form: ', values);
        axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2tlMmhuYjdkMDllbTMwb2I3bWV0NXZyNSJ9.CNUFoIoUh55puHllHgD_Gg')
        .then(res => {

          // console.log("==>",res.data.features[0]);
          const latititude = res.data.features[0].center[0];
          const longitude = res.data.features[0].center[1];

          const obj = {
            user: user._id,
            bio,
            speciality,
            certifications,
            location: {
              name: location,
              longitude: longitude,
              latitude: latititude
            }
          }
          console.log(obj);
          props.createProfile(obj);
        })
        .catch((err)=>{
          const obj = {
            user: user._id,
            bio,
            speciality,
            certifications,
            location: {
              name: "blabla",
              longitude: 10,
              latitude: 10
            }
          }
          console.log(obj);
          props.createProfile(obj);
        });
    
      }
    });
  };


  const { getFieldDecorator } = props.form;



  return (
    <Form onSubmit={handleSubmit} className="login-form">

      <Form.Item>
        {getFieldDecorator('speciality', {
          rules: [{ required: true, message: 'Please input your Speciality!' }],
        })(
          <Input

            placeholder="Speciality"
          />,
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('certifications', {
          rules: [{ required: true, message: 'Please input your Certifications!' }],
        })(
          <Select placeholder='Your certifications' mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
            {children}
          </Select>,
        )}

      </Form.Item>

      <Form.Item>

          <div className="profile-location">

              {getFieldDecorator('location', {
                  rules: [{ required: true, message: 'Please input your Location!' }],
                })(
                  
              <AutoComplete
              style={{
              width: 200,
              }}
              onSearch={handleSearch}
              placeholder="Enter City, Region, District "
              >
              {result.map(place => (
              <Option key={place.place_name} value={place.place_name}>
              {place.place_name}
              </Option>
              ))}
              </AutoComplete>
                )}
          </div>
      </Form.Item>

      <Form.Item>

        {getFieldDecorator('bio', {
          rules: [{ required: true, message: 'Please input your Biography!' }],
        })(
          <TextArea placeholder="Biography . . . " allowClear onChange={onChange} />,
        )}

      </Form.Item>

      
      <Form.Item>


        <div className="item-center">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </div>


      </Form.Item>

    </Form>
  );

};

const profile_builder = Form.create({ name: 'normal_login' })(ProfileBuilderForm);


// const mapStateToProps = state =>({

// });

export default connect(null, { createProfile })(profile_builder);

