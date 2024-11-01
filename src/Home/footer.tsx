import React from 'react';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";

function Footer() {
    return(
        <footer>
            <div className="f_borders">
            <img src={logo} alt="" className='logo_footer'/>
            <div className="f_cat">
                <p>Каталог</p>
                <ul className='f_cat'>
                    <li className="f_cat">
                        <Link to="" className='link'>Готовые напитки</Link>
                    </li>
                    <li className="f_cat">
                        <Link to="" className='link'>Сиропы</Link>
                    </li>
                    <li className="f_cat">
                        <Link to="" className='link'>Топиока</Link>
                    </li>
                </ul>
            </div>
            <div className="f_call">
                <p>Связаться с нами</p>
                <ul className='f_call'>
                    <li className="f_cat">bubbletearu@gmail.com</li>
                    <li className="f_cat">+7 (999) 333 11 77</li>
                    <li className="f_cat"><BsTelegram className='call' /></li>
                    <li className="f_cat"><FaInstagram className='call' /></li>
                    <li className="f_cat"><FaFacebookMessenger className='call' /></li>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer;