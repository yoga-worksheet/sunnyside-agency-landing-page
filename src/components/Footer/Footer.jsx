import React from 'react'
import icon_facebook from '../../assets/images/icon-facebook.svg';
import icon_instagram from '../../assets/images/icon-instagram.svg';
import icon_twitter from '../../assets/images/icon-twitter.svg';
import icon_pinterest from '../../assets/images/icon-pinterest.svg';

const Footer = () => {
  return (
    <footer className='grid gap-8 bg-footer text-footer-text py-14'>
      <h2 className='text-3xl tracking-wide font-barlow font-[900] text-center'>sunnyside</h2>
      <ul className='flex font-barlow justify-evenly md:justify-center md:gap-14'>
        <li><a className='hover:text-white' href="#">About</a></li>
        <li><a className='hover:text-white' href="#">Services</a></li>
        <li><a className='hover:text-white' href="#">Projects</a></li>
      </ul>
      <div className="flex justify-center gap-6 mt-10">
          <img src={icon_facebook} alt="facebook" />
          <img src={icon_instagram} alt="instagram" />
          <img src={icon_twitter} alt="twitter" />
          <img src={icon_pinterest} alt="pinterest" />
      </div>
    </footer>
  )
}

export default Footer