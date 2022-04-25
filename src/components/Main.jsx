import React from 'react';
import image5 from '../img/figure.png';
import image6 from '../img/girl.png';

export const Main = () => {
    return (
        <div className = 'main'>
         <div className="figure">
         <img src={image5}/> 
         </div>
        <div className="line">
        </div>
        <div className="text4">WTG SPAIN</div>
        <div className="text5">Do you need <span>some help</span>?</div>
        <div className="text6">Contact us right now and our team will do everything to help you.</div>
        <div className="rectangle">
        <div className="text7">Contact us</div>
        </div>
         <div className="girl">
         <img src={image6}/> 
         </div>
         </div>
    );

};


