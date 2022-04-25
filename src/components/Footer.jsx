import React from 'react';
import image19 from '../img/logo-footer.png';
import image20 from '../img/mob-phone.png';
import image21 from '../img/mail1.png';
import image22 from '../img/location.png';
import image23 from '../img/facebook.png';
import image24 from '../img/linkedin.png';
import image25 from '../img/youtube.png';
import image26 from '../img/instagram.png';
import image27 from '../img/circle1.png';
import image28 from '../img/star.png';
import image29 from '../img/arrow-top.png';


export const Footer = () => {
    return (
        <div className = 'footer'>
        <div className="logo-footer">
            <img src={image19}/>
        </div>
        <div className="text">the best real estate in Spain</div>
        <div className="line3"></div>
        <div className="footer-menu">
            <li><a className="menu-a" href="#">All cities</a></li>
            <li><a className="menu-a" href="#">Blog</a></li>
            <li><a className="menu-a" href="#">Video</a></li>
            <li><a className="menu-a" href="#">Contacts</a></li>
        </div>
        <div className="rectangle-info">
        <div className="f-contacts">
        <div className="caption">Contacts:</div>
        <div className="phone-info">
            <img src={image20}/>
            <div className="m-number">+34 (965) 020 - 784</div>
        </div>
        <div className="mail-info">
            <img src={image21}/>
            <div className="mail">sales@wtgspain.com</div>
        </div>
        <div className="location-info">
            <img src={image22}/>
            <div className="adress">Centro Comercial «Playa Flamenca»
            C/ Niagara, 63 Local 60/PB, first floor,
            03189 - Orihuela Costa (Alicante), Spain</div>
        </div>
        </div>
        <div className="type">
        <div className="caption">Type:</div>
        <div className="unruliness">
        <ul>
        <li>Appartaments</li>
        <li>Penthousses</li>
        <li>Townhouses</li>
        <li>Commercial</li>
        <li>Bungalows</li>
        <li>Duplexes</li>
        <li>Villa</li>
        </ul>
        </div>
        </div>
        <div className="follow">
        <div className="caption">Follow us:</div>
        <div className="facebook-info">
            <img src={image23}/>
            <div className="facebook">Facebook</div>
        </div>
        <div className="linkedin-info">
            <img src={image24}/>
            <div className="linkedin">Linkedin</div>
        </div>
        <div className="youtube-info">
            <img src={image25}/>
            <div className="youtube">YouTube</div>
        </div>
        <div className="instagram-info">
            <img src={image26}/>
            <div className="instagram">Instagram</div>
        </div>
        <div className="subscribe-info">
        <div className="subscribe">Subscribe to new objects</div>
        <img src={image27}/>
        </div>
        <div className="input-subsribe">
        <input type="email" placeholder='Your email'/>
        <input type="submit" value="Subscribe" placeholder='Subscribe'/>
        </div>
        </div>
        <div className="reating-info">
        <div className="reating">Reating 4.9/5:</div>
        <div className="stars">
        <img src={image28}/>
        <img src={image28}/>
        <img src={image28}/>
        <img src={image28}/>
        <img src={image28}/>
        </div>
        <div className="votes">820 votes</div>
        </div>
        </div>
        <div className="company-info">
        The company "WTG Spain" specializes in the investment and sale of real estate in Spain,
         and the provision of legal and consulting services.
        All rights reserved. "WTG Spain" - The Best Real Estate in Spain. © Copyright 2007 - 2020.
        </div>
        <div className="arrow">
            <img src={image29}/>
        </div>
        </div>

    );

};


