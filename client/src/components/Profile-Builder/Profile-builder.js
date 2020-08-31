import React, { useState } from 'react';
import { Form,Input, Button,Select} from 'antd';
import './Profile-builder.css';
import { connect } from "react-redux";
import { createProfile } from  '../../actions/profile-actions/actions';
import Location from  '../../components/Home/intro/Location_Date_Picker/Location/Location';

const ProfileBuilderForm = props => {
  
const [formData,setFormData] = useState({
    Speciality:'',
    Certifications:'',
    Biography:''

});

    const children = [];


    const { TextArea } = Input;
    
    const handleChange = (value)=>{
      //console.log(value);
      
    }
    
    const onChange = e => {
        //console.log(e.target.value);
      };
    
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.setData({
          ...props.data,
          values
        })
       
        console.log(props.data);
 
       //hedhi l action li najouti beha profile ---> props.createProfile(values);
        //console.log(formData);
      }
    });
  };

 
    const { getFieldDecorator } = props.form;

  
    
    return (
      <Form onSubmit={handleSubmit} className="login-form">

        <Form.Item>
          {getFieldDecorator('Speciality', {
            rules: [{ required: true, message: 'Please input your Speciality!' }],
          })(
            <Input
              
              placeholder="Speciality"
            />,
          )}
        </Form.Item>
    
        <Form.Item>
        {getFieldDecorator('Certifications', {
            rules: [{ required: true, message: 'Please input your Certifications!' }],
          })(
            <Select placeholder='Your certifications' mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
                {children}
            </Select>,
          )}
            
        </Form.Item>

      
        <Form.Item>

        {getFieldDecorator('Biography', {
            rules: [{ required: true, message: 'Please input your Biography!' }],
          })(
            <TextArea placeholder="Biography . . . " allowClear onChange={onChange} />,
          )}
             
        </Form.Item>
      
        <Form.Item>
          
        {/* {getFieldDecorator('Location', {
            rules: [{ required: true, message: 'Please input your Location!' }],
          })(
            <Location/>
          )}
           */}
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

export default connect(null,{createProfile}) ( profile_builder );

