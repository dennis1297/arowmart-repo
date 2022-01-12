import React from 'react';
import "../src/Footer.css";
import pic from "../src/img/footerlogo1.jpg";
import { FaFacebook,FaInstagram,FaTwitter,FaWhatsapp,FaLinkedinIn,FaEnvelope,FaArrowRight,} from 'react-icons/fa';


function Footer ()  {
    return (
        <div className='footer'>
        <div className='row'>
            <div className='col'>
            <img className='logo' src={pic} alt='' />
            <p>Arowmart was established in 2022, and strives to be India's leading online destination for smarter shopping by providing a single platform to search, sort and what to buy where</p>
            </div>
         <div className='col'>
             <h3>Office<div className='underline'></div><span></span></h3>
             <p>Thiruveedian Street</p>
             <p>Gopalapuram,Chennai</p>
             <p className='email-id'>Tamil Nadu, PIN 600086, India</p>
             <h4>+91 9094839243</h4>
         </div>
         <div className='col'>
         <h3>Get to Know About Us<div className='underline'></div><span></span></h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Terms & Conditions</p>
         </div>
         <div className='col'>
             <h3>Newsletter<div className='underline'></div><span></span></h3>
             <form className='form'>
             <div className='form.far'>
             <FaEnvelope/>
             </div>
                 <input type="email"placeholder='Enter your email id' required></input>
                 <button type ="submit"><FaArrowRight/></button>
             </form>
             <div className='social_icons'>
             <div className='fab'><FaFacebook/></div>
             <div className='fab'><FaInstagram/></div>
             <div className='fab'><FaTwitter/></div>
             <div className='fab'><FaWhatsapp/></div>
             <div className='fab'><FaLinkedinIn/></div>
             
             </div>
            </div>
           </div>
           <div style={{ borderTop: "2px solid #fff ", marginLeft: 60, marginRight: 60 }}></div>
               <p className='copyright'>Arowmart @ 2021 - All Rights Reserved</p> 
          </div>
    )
}

export default Footer
