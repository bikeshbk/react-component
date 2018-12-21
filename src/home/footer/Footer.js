import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-address">
                <ul>
                    <li>Address: Bhaktapur Nepal</li>
                    <li>Contact Number: 9876543210</li>
                </ul>
                </div>
            </div>
        );
    }
}
export default Footer;