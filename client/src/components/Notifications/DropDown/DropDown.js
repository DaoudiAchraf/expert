import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import Badge from '../Badge/Badge';
import './DropDown.css';
import img from '../../../images/profile_img.jpg';

const DropdownC = (props) => {
    
    const menu = (
        <Menu style={{backgroundColor:'transparent',boxShadow:'none'}}>
          <Menu.Item  className='dropdown_item'>
   
            <div className="single-notification">
            <div className="user_infos">
                 <img src={img} />
                 <h5 style={{display:'inline'}}>Expert Ali</h5>
            </div>
             
             <p>Date : 02-03-2019 <br/> Time : 9.30 </p>

               <div className="controls">
                    <button className="btn btn-success">Accepter</button> 
                     <button className="btn btn-danger">Refuser</button>
               </div>
               
            </div>

            <div className="single-notification">
            <div className="user_infos">
                 <img src={img} />
                 <h5 style={{display:'inline'}}>Expert Ali</h5>
            </div>
             
             <p>Date : 02-03-2019 <br/> Time : 9.30 </p>

               <div className="controls">
                    <button className="btn btn-success">Accepter</button> 
                     <button className="btn btn-danger">Refuser</button>
               </div>
               
            </div>

            <div className="single-notification">
            <div className="user_infos">
                 <img src={img} />
                 <h5 style={{display:'inline'}}>Expert Ali</h5>
            </div>
             
             <p>Date : 02-03-2019 <br/> Time : 9.30 </p>

               <div className="controls">
                    <button className="btn btn-success">Accepter</button> 
                     <button className="btn btn-danger">Refuser</button>
               </div>
               
            </div>
            <div className="single-notification">
            <div className="user_infos">
                 <img src={img} />
                 <h5 style={{display:'inline'}}>Expert Ali</h5>
            </div>
             
             <p>Date : 02-03-2019 <br/> Time : 9.30 </p>

               <div className="controls">
                    <button className="btn btn-success">Accepter</button> 
                     <button className="btn btn-danger">Refuser</button>
               </div>
               
            </div>
          </Menu.Item>
         
        
        </Menu>
      );

    return (
            

          <>
          
            <Dropdown  trigger={['click']}  overlay={menu} placement="bottomLeft" arrow >
              <div>
                <Badge>
                </Badge>
              </div>
          
            </Dropdown>
             
          </>
       
    )
}

export default DropdownC
