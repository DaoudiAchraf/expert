import React,{useEffect,useState} from 'react';
import { Menu, Dropdown } from 'antd';
import Badge from '../Badge/Badge';
import './DropDown.css';
import img from '../../../images/profile_img.jpg';
import { getAppointments} from '../../../actions/reservation-actions/actions'
import { useDispatch,useSelector } from 'react-redux';
import moment from 'moment/moment.js';
import {ScheduleTwoTone,ClockCircleTwoTone,
        TagTwoTone,FormOutlined} from '@ant-design/icons'

const DropdownC = (props) => {
 
    const [userNotifications,setNotifications] = useState([]);

    const dispatch = useDispatch();

    let auth = useSelector(state => state.authReducer);

    console.log('auth',auth.user.role === 'client');

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


    const current_user = useSelector( state => state.authReducer);

    console.log(current_user.user.role);

    const menu = (
        <Menu style={{backgroundColor:'transparent',boxShadow:'none'}}>
          <Menu.Item  className='dropdown_item'>
            {
              userNotifications.map((notification)=>{

                   const {_id,name,date,type,status,expert} = notification;
            
                    return( current_user.user ?

                       (current_user.user.role === "client" ?

                            <div key={_id} className="single-notification">
                                <div className="user_infos">
                                    <img src={img} />
                                    <h5 style={{display:'inline'}}>{expert.login ? expert.login :name}</h5>
                                </div>
                                
                                <p style={{marginBottom:'9',marginBottom:'5'}} ><TagTwoTone/> {type} <br/>

                                  <ScheduleTwoTone/> {moment(date).format('YYYY-MM-DD')} {" "} 
                                  <ClockCircleTwoTone/> {moment(date).format('HH.mm')} 
                                </p>

                                { 
                                  expert.login && status === 'accepted' ? 
                                     <div className="appointment_response" style={{backgroundColor:"#93CC49"}}>
                                       <span>accepté</span>
                                     </div>
                                  :expert.login && status === 'rejected' ? 
                                      <div className="appointment_response">
                                      <span>refusé</span>
                                    </div>
                                  :null
                             
                                }
                           </div>
                            :null)
                          // :<div className="client__reservation">
                          //          <div className="user_infos ">
                          //              <img src={img} />
                          //              <h5 style={{display:'inline'}}>{expert.login ? expert.login :name}</h5>
                          //          </div>
                                
                          //          <p style={{marginTop:9,marginBottom:0,textAlign:'center'}} >
                          //            <TagTwoTone/> {type} <br/>

                          //            <ScheduleTwoTone/> {moment(date).format('YYYY-MM-DD')} {" "} 
                          //            <ClockCircleTwoTone/> {moment(date).format('HH.mm')} 
                          //          </p>
                          // </div>)
                      :null
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
