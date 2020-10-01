import React,{useEffect,useState,useRef} from 'react';
import { Menu, Dropdown } from 'antd';
import Badge from '../Badge/Badge';
import './DropDown.css';
import img from '../../../images/profile_img.jpg';
import { getAppointments,setReservationStatus } from '../../../actions/reservation-actions/actions'
import { useDispatch,useSelector } from 'react-redux';
import moment from 'moment/moment.js';
import RapportModel from '../../Rapport/Rapport';
import {ScheduleTwoTone,ClockCircleTwoTone,
        TagTwoTone,FormOutlined} from '@ant-design/icons'


const DropdownC = (props) => {

 
    const [userNotifications,setNotifications] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAppointments());
    }, []);
      
    let Notifications = useSelector(state => state.reservationReducer.myReservations);
   
    useEffect(()=>{
        setNotifications(Notifications);
    },[Notifications]);

    const [dropDownState ,setDropdownState] = useState(false);

    const handle =(e)=>{
      console.log(e);
      setDropdownState(!dropDownState);
    }

    const set_AppointmentStatus = (_id,status)=>{
      dispatch(setReservationStatus(_id,{status:status}));

      if(status === 'rejected'){
            const Notifs = userNotifications.filter(
            notification => notification._id != _id);
            setNotifications(Notifs);
      }
      else
      {
         let updatedState =[];   
          userNotifications.map(
           notification => {
            if(notification._id === _id)
                notification.status = 'accepted';
            updatedState.push(notification);  
            }
           );
           

           console.log('accep',updatedState);
          setNotifications(updatedState);
      }
    }

    const ref = useRef(null);

    const show = () => {
      ref.current.updateVisiblity();
    };


    const menu = (
        <Menu style={{backgroundColor:'transparent',boxShadow:'none'}}>
          <Menu.Item  className='dropdown_item'>
            {
              userNotifications.map((notification)=>{

                   const {_id,name,date,type,status,expert} = notification;
            
                    return(
                            <div key={_id} className="single-notification">
                                <div className="user_infos">
                                    <img src={img} />
                                    <h5 style={{display:'inline'}}>{expert.login ? expert.login :name}</h5>
                                </div>
                                
                                <p style={{marginBottom:'9',marginBottom:'5'}} ><TagTwoTone/> {type} <br/>

                                  <ScheduleTwoTone/> {moment(date).format('YYYY-MM-DD')} {" "} 
                                  <ClockCircleTwoTone/> {moment(date).format('HH.mm')} 
                                </p>

                                 { expert.login && status === 'accepted' ? 
                                     <div className="appointment_response" style={{backgroundColor:"#d7ffad"}}>
                                       <span>accepté</span>
                                     </div>
                                  :expert.login && status === 'rejected' ? 
                                      <div className="appointment_response" style={{backgroundColor:"#ffab9e"}}>
                                      <span>refusé</span>
                                    </div>
                                  :status === 'waiting' ?

                                    <div className="controls">
                                    <button onClick={()=>set_AppointmentStatus(_id,'accepted')}
                                    className="btn btn-success">Accepter</button> 

                                    <button onClick={()=>set_AppointmentStatus(_id,'rejected')}
                                    className="btn btn-danger">Refuser</button>
                                    </div>
                                    
                                    
                                  :<div style={{backgroundColor:'transparent'}} > 
                                      <div className="rapport" onClick={()=>show} onClick={show}>
                         
                                      <FormOutlined style={{marginRight:'5px',fontSize:'20px'}} />
                                      <span>Rapport à faire</span>
                          
                                    </div>

                                    <RapportModel ref={ref}  />
                                    </div>
                                }
                           </div>
                    )})
            }
      
          </Menu.Item>
        </Menu>
      );

    return (
          
          <>
            <Dropdown visible={dropDownState} onVisibleChange={handle} trigger={['click']}  overlay={menu} placement="bottomLeft" arrow >
              <div>
                <Badge nbrNotifications={userNotifications.length}/>
              </div>
          
            </Dropdown>
             
          </>
       
    )
}

export default DropdownC
