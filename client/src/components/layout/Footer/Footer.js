import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">

            <div className="inner_footer">
                <div>
                    <h4>Company</h4>
                    <p>About us</p>
                    <p>Services</p>
                    <p>Team</p>
                    <p>Reviews</p>
                    <p>Contacts</p>
                </div>

                <div>
                    <h4>Social Media</h4>
                    <p>Facebook</p>
                    <p>VX</p>
                    <p>Instagram</p>
                </div>

                <div>
                    <h4>Legal</h4>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Security</p>
                </div>

                <div>
                    <h4>Suivez-nous</h4>
                    <h5>Follow</h5>
               
                </div>
            </div>

        {/*             
            <div className="inner_footer">
               <div className="row">

               </div>
            </div> */}
        </div>
    )
}

export default Footer;
