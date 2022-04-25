import React from 'react';
import image7 from '../img/decor.png';
import image8 from '../img/phone_blue.png';
import image9 from '../img/mail_blue.png';
import image10 from '../img/whatsapp_green.png';
import image11 from '../img/viber.png';
import image12 from '../img/messenger.png';
import image13 from '../img/telegram.png';
import image14 from '../img/map.png';
import  {Form } from './Form';

export const Content = () => {
    return (
        <div className = 'content'>
        <div className="decor">
        <img src={image7}/>
        </div>
        <div className="caption">We are always in touch and will be happy to resolve any of your questions.</div>
        <div className = 'map-and-form'>
        <div className="image-map">
        <img src={image14}/>
        </div>
        <Form/>
        </div>
        <div className="line1"></div>
        <div className="contact">
            <div className="phone">Phone</div>
            <div className="image-phone">
                <img src={image8}/>
            </div>
            <div className="phone-number">+34 965 020784</div>
            <div className="office">Office in  Spain</div>
            <div className="office-adress">
            Centro Comercial Playa Flamenca C / Niagara,
            63 Local 60/PB, first floor, 03189 - Orihuela 
            Costa (Alicante), Spain
            </div>
            <div className="e-mail">E-mail</div>
            <div className="image-e-mail">
                <img src={image9}/>
            </div>
            <div className="e-mail-info">sales@wtgspain.com</div>
        </div>
        <div className="line2"></div>
        
        <div className="messangers">
        <div className="text-online">We are online</div>
        <div className="image-watsapp">
            <img src={image10}/>
        </div>
        <div className="text-watsapp">WhatsApp</div>
        <div className="image-viber">
            <img src={image11}/>
        </div>
        <div className="text-viber">Viber</div>
        <div className="image-messenger">
            <img src={image12}/>
        </div>
        <div className="text-messenger">Messenger</div>
        <div className="image-telegram">
            <img src={image13}/>
        </div>
        <div className="text-telegram">Messenger</div>

        </div>

        </div>

    );
};



