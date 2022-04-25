import React from 'react';
import image1 from '../img/mail.png';
import image2 from '../img/phone.png';
import image3 from '../img/circle.png';
import image4 from '../img/hurt.png';
import image5 from '../img/united-kingdom.png';

export const Panel = () => {
    return (
        <div className = 'up_panel'>
            <div className="mail">
            <img src={image1}/>
            </div>
            <div className="text1" >sales@wtgspain.com</div>
            <div className="phone">
            <img src={image2}/> 
            </div>
            <div className="text2">+34 965 020784</div>
            <div className="watsapp">
            <img src={image3}/>
            </div>
            <div className="text3">WhatsApp</div>WhatsApp
            <div className="hurt">
            <img src={image4}/>
            </div>
            <div className="language">
            <img src={image5}/>
            </div>
            </div>
    );
};
