import React from 'react';
import './CSS/Footer.css';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from 'react-icons/ai';
function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='footeritem'>
          <h1>Explore</h1>
          <h2>Home</h2>
          <h2>Questions</h2>
          <h2>Articles</h2>
          <h2>Tutorials</h2>
        </div>
        <div className='footeritem'>
          <h1>Support</h1>
          <h2>FAQs</h2>
          <h2>Help</h2>
          <h2>Contact Us</h2>
        </div>
        <div className='endformitem'>
          <h1>Stay connected</h1>
          <div className='icon'>
            <AiFillFacebook size={30} />
            <AiFillTwitterSquare size={30} />
            <AiFillInstagram size={30} />
          </div>
        </div>
      </div>
      <div className='footerdev'>
        <h1 className='Deakin'>DEV@Deakin 2022</h1>
        <div className='footerlast'>
          <h2 className='footeritem'>Privacy Policy</h2>
          <h2 className='footeritem'>Terms</h2>
          <h2 className='footeritem'>Code of Concuct</h2>
        </div>
      </div>
    </div>
  );
}
export default Footer;
