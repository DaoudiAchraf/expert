import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Select, AutoComplete, Upload, Icon } from 'antd';
import './Profile-builder.css';
import { connect } from "react-redux";
import { createProfile } from '../../actions/profile-actions/actions';
import axios from 'axios';

const { Option } = AutoComplete;

const ProfileBuilderForm = props => {
  const user = useSelector(state => state.authReducer.user);


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

  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
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

  const handleSubmit = async e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      if (!err) {
        const { bio, speciality, certifications, location, dragger } = values;
        // console.log(bio,speciality,certifications,location);
        console.log('Received values of form: ', values);

        console.log('Dragger:', values.dragger);

        const fd = new FormData();

        console.log('dragGer', dragger);

        dragger.forEach(file => {
          fd.append('image', file.originFileObj);
        });

        axios.post("http://localhost:5000/api/upload", fd).then(res => console.log('res: ', res));

        axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2tlMmhuYjdkMDllbTMwb2I3bWV0NXZyNSJ9.CNUFoIoUh55puHllHgD_Gg')
          .then(async res => {
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
            props.setUserExpertDetails(obj);
            // await props.createProfile(obj);
            props.setNextstep(props.nextstep + 1);
            props.refsigntupexpert.current.next();
            // props.setProfileExpert(false);
            //props.setShowmodel(false);
          })
          .catch((err) => {
            console.log("error --> ", err);
          });

      }
    });
  };


  const { getFieldDecorator } = props.form;


  function handleChanges(value) {
    console.log(`selected ${value}`);
  }


  return (
    <Form onSubmit={handleSubmit} className="login-form">

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
              props.cars.map((c, index) =>
                <Option value={c} key={index}>{c}</Option>
              )
            }
          </Select>
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('certifications', {
          rules: [{ required: true, message: 'Please enter your Certifications!' }],
        })(
          <Select placeholder='Your certifications' mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
            {children}
          </Select>,
        )}


        <Form.Item style={{ marginTop: '0px' }}>
          {getFieldDecorator('dragger', {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
            rules: [{ required: true, message: 'Upload your certification(s) to continue ..' }]
          })(
            <Upload.Dragger name="files">
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-hint">Click or drag file to this area to upload</p>
              {/* <p className="ant-upload-text">Support for a single or bulk upload.</p> */}
            </Upload.Dragger>,
          )}
        </Form.Item>

      </Form.Item>


      <Form.Item>


        <div className="item-center">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Next
          </Button>
        </div>
      </Form.Item>

    </Form>
  );

};

const profile_builder = Form.create({ name: 'normal_login' })(ProfileBuilderForm);


export default connect(null, { createProfile })(profile_builder);
