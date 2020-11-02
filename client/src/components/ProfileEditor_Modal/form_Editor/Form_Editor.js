import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Select, AutoComplete } from 'antd';
import axios from 'axios';
import {updateProfile} from '../../../actions/profile-actions/actions';

const { Option } = AutoComplete;

const ProfileBuilderForm = props=> {

   const dispatch = useDispatch();
    
    const [cars,setCars] = useState([]);

    useEffect(() => {
        axios.get('https://private-anon-0a729253ca-carsapi1.apiary-mock.com/manufacturers?New%20item=').then((data) => {
          data.data.map((e, index) => {
            const obj = cars;
            obj.push(e.name);
            setCars(obj);
          })
        });
      }, []);

  const certifs = [];


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
          setResult(suggestions);

        })

    }

  };

  const profile = useSelector(state => state.profileReducer.profile);
  useEffect(()=>{
    props.form.setFieldsValue({
        bio:profile.bio,
        speciality: profile.speciality,
        certifications: profile.certifications,
        location: profile.location.name
    
    });
  },[])


  const handleSubmit = async e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        const { bio, speciality, certifications, location } = values;

        console.log('Received values of form: ', values);
        axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2tlMmhuYjdkMDllbTMwb2I3bWV0NXZyNSJ9.CNUFoIoUh55puHllHgD_Gg')
          .then(async res => {

            const latititude = res.data.features[0].center[0];
            const longitude = res.data.features[0].center[1];

            const obj = {
              bio,
              speciality,
              certifications,
              location: {
                name: location,
                longitude: longitude,
                latitude: latititude
              }
            }
            console.log("==>",obj);
            
            dispatch(updateProfile(obj)).then(res=>{console.log(res);alert('t3adet')})
    
          })
          .catch((err) => {
            console.log("error");
          });

      }
    });
  };


  const { getFieldDecorator } = props.form;


  function handleChanges(value) {
    console.log(`selected ${value}`);
  }

  const ok =()=>
  {
    console.log(props.form.getFieldsValue());
  }


  return (
    <Form onSubmit={handleSubmit} className="login-form">

      <Form.Item>
        {getFieldDecorator('speciality', {
          rules: [{ required: true, message: 'Please input your Speciality!' }],
        })(
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Your speciality"
            onChange={handleChanges}
          >
            <Option key={200}>All</Option>
            {
             cars.map((c, index) =>
                <Option value={c} key={index}>{c}</Option>
              )
            }
          </Select>
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('certifications', {
          rules: [{ required: true, message: 'Please input your Certifications!' }],
        })(
          <Select placeholder='Your certifications' mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
            {certifs}
          </Select>,
        )}

      </Form.Item>

      <Form.Item>

        <div className="profile-location">

          {getFieldDecorator('location', {
            rules: [{ required: true, message: 'Please input your Location!' }],
          })(
            <AutoComplete 
              style={{ width: '100%' }}
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

      <div style={{display:'flex' , justifyContent:'center'}}>
        <button  className='profileCard__item-btn' type='submit'>VALIDER</button>
      </div>
            
      
            
    </Form>
  );

}

const profile_builder = Form.create({ name: 'normal_login' })(ProfileBuilderForm);


export default profile_builder;

