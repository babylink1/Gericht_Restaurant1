import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="heading__cormorant" style={{ marginBottom: '3rem' }}> Find Us</h1>
      <div className="app__wrapper-content">
        <p classname="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p classname="p__cormorant" style={{ color: '#DCCA87', marge: '2rem 0' }}>Open Hours</p>
        <p classname="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p classname="p__opensans">Sat -Sun: 10:00 am - 03:00 am</p>

      </div>
      <button className="custom__buttom" style={{ marginTop: '2rem' }}>Visit Us</button>

    </div>

    <div classNmae="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div >
);

export default FindUs;
