import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon_img" className="spoon__img" />

  </div>
);

export default SubHeading;


// index.css 中已有root 中的cormorant 的定义