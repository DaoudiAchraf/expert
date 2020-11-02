import React,{useRef} from 'react';
import { useParams } from 'react-router';
import { Input } from 'antd';
import { Form,Checkbox,DatePicker,InputNumber } from 'antd';

import './Reservation.css';

import {useDispatch} from 'react-redux';
import {setReservation} from '../../actions/reservation-actions/actions';
import Popup from './pop-ups/Popup';


const ReservationForm = (props) => {

    const ref = useRef(null);
    //const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const dispatch = useDispatch();

    const expert = useParams().id;
  
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, fieldsValue) => {
          if (!err) {
            
            const {name,phone,datePicker,hours,minutes,checkType} = fieldsValue;
            
            const date = new Date(datePicker);
            date.setHours(hours);
            date.setMinutes(minutes);
       
            console.log(checkType[0]);
            const obj=
            {
                name,
                phone,
                type:checkType[0],
                date,
                expert
            }
            
            console.log("obj",obj);
            console.log(fieldsValue);

            
            dispatch(setReservation(obj));

            ref.current.openNotification('bottomLeft');
           // console.log('values from form',fieldsValue['date-picker'].format('YYYY-MM-DD'));
          }});
    }

    const { getFieldDecorator } = props.form;    
    return (
        <div className="reservation">
        <div className="reservation_header">
            <h2>Réservez votre visite</h2>
            <p>Monday to Friday 09:00am-06.00pm</p>
          
        </div>

        <div className="reservation_content">

     <Form onSubmit={handleSubmit} className="login-form">
        
       <Form.Item>
        <h5>Name</h5>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input your Name!' }],
        })(
          <Input placeholder="Full Name" />
        )}
        </Form.Item>
       
        <Form.Item>
            <h5>Phone number</h5>
            {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your Phone number!' }],
            })(
                <Input placeholder="Your phone number" />
            )}
      
        </Form.Item>

        <Form.Item>
        <h5>Select Date</h5>
          {getFieldDecorator('datePicker', {
      rules: [{ type: 'object', required: true, message: 'Please select a Date !' }],
    })(
            <DatePicker placeholder="select date"  />,
          )}
       </Form.Item>

       
            <h5>Time</h5>
      
            <div className="time-input">

            <Form.Item>
                 {getFieldDecorator('hours', {
                  rules: [{ required: true, message: 'Please input time by Hour' }],
                   })(
                <InputNumber placeholder="8" className="ant-input" size="large" min={0} max={23} step={1}/>
                // <input className="ant-input" type="number" min="0" max="12" placeholder="08" />
                  )}
            </Form.Item>
          
            <Form.Item>
                      {getFieldDecorator('minutes', {
                      rules: [{ required: true, message: 'Please input time by minutes' }],
                      })(
                <InputNumber placeholder="30" className="ant-input"  size="large" min={0} max={59} step={1}/>
                
                  )} 
            </Form.Item>
            </div>
          
       

        
            <div >
            <Form.Item>
            {getFieldDecorator('checkType', {
                      rules: [{ required: true, message: 'Please check the type of reservation !' }],
                      initialValue: ['a']
                      })(
                    <Checkbox.Group style={{ width: '100%' }}>
                    <div className="checkbox-group">
                        <Checkbox className="checkbox"  value="Visite generale">Visite génerale</Checkbox>
                        <br />
                        <Checkbox className="checkbox" value="Avis d'achat">Avis d'achat</Checkbox>
                        <br />
                        <Checkbox className="checkbox" value="Avis tollerie" >Avis tollerie</Checkbox>
                    </div>
                    </Checkbox.Group>
             )} 
             </Form.Item>
            </div>
        
            <button type="submit" className="btn btn-outline-primary">REQUEST APPOINTMENT</button>
        </Form>

        <div className="popup_cc">
          <Popup ref={ref}/>
        </div>

        

        </div>


    </div>
    )
}

const Reservation = Form.create({ name: 'normal_login' })(ReservationForm);

export default Reservation;
