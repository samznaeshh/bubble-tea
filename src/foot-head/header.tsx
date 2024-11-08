import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

function header() {
    return(
        <header>
            <div className="logo">
            <Link to="../Home">
                <img src={logo} alt="example"/>
            </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="../Home" className='link'>Главная</Link>
                    </li>
                    <li>
                        <Link to="../catalog" className='link'>Каталог</Link>
                    </li>
                    <li>
                        <Link to="" className='link'>Акции</Link>
                    </li>
                    <li>
                        <Link to="" className='link'>Оплата и доставка</Link>
                    </li>
                </ul>
            </nav>
            <div className="elem">
                <Link to=""><IoSearch className='search' /></Link>
                <Link to=""><SlBasket className='basket'/></Link>
            </div>
            <Link to="../auth"><button className='auth'>Войти</button></Link>
        </header>
    )
}


export default header;