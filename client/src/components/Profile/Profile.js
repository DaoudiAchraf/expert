import React,{useEffect} from 'react';
import './Profile.css';
import SelectBar from './SelectBar/SelectBar';
import img from '../../images/profile_img.jpg';
import { connect } from 'react-redux';
import {getCurrentProfile} from '../../actions/profile-actions/actions';

const Profile = ({getCurrentProfile,profile}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return (
        <div className="profile-infos">

       
            <div className="infos-header">
                    <SelectBar/>
                </div>
            <div className="profile_overview">
            <div className="first_row">
                <div className="upper-infos">
                    <img src={img}></img>
                    <div>
                        <p className="skill_type">diagnostique et mecanique</p>
                        <p className="expert_name">Name</p>
                        <p>Rating</p>
                        <p className="address">Address :</p>
                        <p className="expert_address">Fouchana Cité Prime</p>
                    </div>
                </div>

        </div>

        
        <div className="seconde_row">
            <hr></hr>
            <div className="lower-infos">
                <p className="expert_career"> Professional statement</p>
                <div className="inner_career">
                    <p>
                        dsqdbd hgqdsh jqdgjqgd jhgjdgqs hjhdgjshgj shdgq jshgqs
                        sdbjqh dbjdbhsq dbhqdbnqdb qbdqshdbqsdvbqsd vsdqnbv
                    </p>
                </div>
          

                <p className="expert_career">Certifications</p>
                <div className="inner_career">
                
                    <p> -dsqdbd hgqdsh jqdgjqgd </p>
                    <p>
                        -jhgjdgqs hjhdgjshgj shdgq jshgqs
                        - sdbjqh dbjdbhsq 
                    </p> 
                </div>
             
            </div>
    
        </div>

        </div>
            
           

            {/* <div className="lower-infos">
                
            </div> */}
        </div>
    )
}

const mapStateToProps = state =>({
    profile: state.profile
});
export default connect(mapStateToProps,{getCurrentProfile}) (Profile);
