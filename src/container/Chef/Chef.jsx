import React from 'react';

import {images} from '../../constants';
import './Chef.css';
import {SubHeading} from '../../components'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_imd-reverse">
          <img src={images.chef} alt={"chef"} />
      </div>
      
      <div className="app__wrapper_info">
          <SubHeading title={"Chef's Word"}/>
          <h1 className="headtext__cormorant">What We Believe In</h1>
          
          <div className="app__chef-content">
              <div className="app__chef-content_quote">
                  <img  src={images.quote} alt="quote"/>
                  <p className="p__opensans"> Just words: Just trust!</p>
              </div>
              
              
              <div className="app__chef-content_quote">
                  <p className="p__opensans">We Make Food yes</p>
              <img src={images.quote} alt="quote"/>
              </div>
          </div>
          
          <div className="app__chef-sign">
              <p>Kevin Luo</p>
              <p className="p__opensans">Chef & Founder</p>
              <img src={images.sign} alt={"sign"} />
          </div>
          
      </div>
  </div>
);

export default Chef;
