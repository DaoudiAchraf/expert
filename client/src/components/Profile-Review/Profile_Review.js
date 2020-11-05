import React from 'react';
import { Rate } from 'antd';
import './Profile_Review.css';
import Rating from '@material-ui/lab/Rating';
import img from '../../images/profile_img.jpg';


const Profile_Review = () => {

    // handleChange = () => {
    //     alert('rated');
    //   };

    return (
        <div className="profile_review">
                <div className="review_header">
                    <h2>Reviews (32)</h2>
                    
                    <div className="review_rw">
                        <a><p>See all</p></a>
                        <button className="rev_btn">Write a Review</button>
                    </div>

                </div>

                {/* <div className="fields">

                    <div className="rated-field">
                         <h5>Explains</h5>
                         <Rating name="size-small" defaultValue={2} size="small" /> 
                    </div>

                    <div className="rated-field">
                         <h5>Listens</h5>
                         <Rating name="size-small" defaultValue={3} size="small" />
                    </div>

                    <div className="rated-field">
                         <h5>Respect & concern</h5>
                         <Rating name="size-small" defaultValue={2} size="small" />
                    </div>
       

                    <div className="rated-field">
                         <h5>Time spend with client</h5>
                         <Rating name="size-small" defaultValue={2} size="small" />
                    </div>
       
                </div> */}

                <div className="review">
                    <div className="user-infos">

                        <img src={img}/>
                        <div>
                            <h6>Kevin Marshall</h6>
                            <Rating name="size-small" defaultValue={2} size="small" />
                            
                        </div>
                    </div>

                    <h6>Reviewed on Aug 29th 2020  Would you Recommend?</h6>
                    <p>
                    Dr. Abby even gave me sfdfsd fsfsd fsdfsdfsdf sbcvb cvbcvb ggdfgdgfv
                    Abby even gave me sfdfsd fsfsd fsdfsdfsdf sbcvb cvbcvb ggdfgdgfv
                    </p>
                    <button className="rev_btn">Read all Reviews</button>
                </div>
        </div>
  
    )
}

export default Profile_Review;
