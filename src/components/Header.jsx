import React from 'react';
import image15 from '../img/logo.png';
import image16 from '../img/l_s.png';

export const Header = () => {
    return (
        <div className = 'header'>
        <div className="logo">
            <img src={image15}/>
        </div>
        <div className="menu">
            <li><a className="menu-a" href="#">Cities</a></li>
            <li><a className="menu-a" href="#">Propeties</a></li>
            <li><a className="menu-a" href="#">Blog</a></li>
            <li><a className="menu-a" href="#">Video</a></li>
            <li><a className="menu-a" href="#">Contacts</a></li>
        </div>
        <div className="log-sign">
            <img src={image16}/>
        </div>
        </div>
    );
};
