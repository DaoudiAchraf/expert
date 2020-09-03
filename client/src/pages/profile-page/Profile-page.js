import React ,{useEffect}from 'react';
import './Profile-page.css';
import Profile from '../../components/Profile/Profile';
import { Input } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Checkbox } from 'antd';
import Profile_Review from '../../components/Profile-Review/Profile_Review';
import {useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {getProfiles} from '../../actions/profile-actions/actions';



const ProfilePage = ({getProfiles}) => {
    
    useEffect(() => {
        getProfiles();
       // console.log("ddd",user);
    }, []);
    const profiles = useSelector(state => state.profileReducer.profiles);
  

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

   console.log('proos',profiles);


    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return (
        <div className="profile-page">
            <div className="profile">
                <div className="overview">
                    <h3>Home/Map Search</h3>
                    <Profile profiles={profiles}/>
                </div>
                <div className="reservation">
                    <div className="reservation_header">
                        <h2>Réservez votre visite</h2>
                        <p>Monday to Friday 09:00am-06.00pm</p>
                      
                    </div>

                    <div className="reservation_content">

                        <h5>phone name</h5>
                        <Input placeholder="Full Name" />

                        <h5>phone number</h5>
                        <Input placeholder="Your phone number" />

                        <h5>Select Date</h5>
                        <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />

                        <h5>Hour</h5>
                        <div className="time-input">
                            <input className="ant-input" type="number" min="0" max="12" placeholder="08" />
                            <input className="ant-input" type="number" min="0" max="59" placeholder="30" />
                        </div>

                        <div className="checkbox-group">

                            <Checkbox className="checkbox" onChange={onChange}>Visite génerale</Checkbox>
                            <br />
                            <Checkbox className="checkbox" onChange={onChange}>Avis d'achat</Checkbox>
                            <br />
                            <Checkbox className="checkbox" onChange={onChange}>Avis tollerie</Checkbox>

                        </div>
                        <button type="button" className="btn btn-outline-primary">Primary</button>
                    </div>


                </div>
            </div>

            <Profile_Review />
        </div>

    )
}

export default connect(null,{getProfiles}) (ProfilePage);
