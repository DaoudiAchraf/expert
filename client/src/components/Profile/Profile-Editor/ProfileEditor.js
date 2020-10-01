import React from 'react';
import userIcon from '../../../images/user.png';
import certificationIcon from '../../../images/waranty.png';

import './ProfileEditor.css';

const Profileeditor = (props) => {
    return (
        <div>
                <div className="first_row">
                <div className="upper-infos">
                    <img ></img>
                    <div>
             
                        <input className="skill_input" placeholder="votre Specialite"></input>
                        <input className="_input" placeholder="expert name"/>
                        <p>Rating</p>
                        <p className="address">Address :</p>
                        <input className="addr _input" placeholder="ex : Tunis , Nabeul"/>
            
                    </div>
                </div>

        </div>

        
        <div className="seconde_row">
            <hr></hr>
            <div className="lower-infos">

                <div className="biography">
                    <img className="icon" src={userIcon}></img>
                    <p className="expert_career"> Professional statement :</p>
                    <div className="inner_career">
                        <textarea>
                       
                       </textarea>
                    </div>
                </div>
          
                <div className="certifs">
                <img className="icon" src={certificationIcon}></img>
                <p className="expert_career">Certifications :</p>
                <div className="inner_career">
                   <textarea>

                   </textarea>
                </div>
                </div>
             
            </div>
    
            </div>
        </div>
    )
}


export default Profileeditor
