import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

function Header() {
    return(
        <header>
            <img src={logo} alt="" className='logo' onClick={() => <Link to="/Home"></Link>} />
            <nav>
                <ul>
                    <li>
                        <Link to="/catalog" className='link'>Каталог</Link>
                    </li>
                    <li>
                        <Link to="" className='link'>Акции</Link>
                    </li>
                    <li>
                        <Link to="" className='link'>Оплата и доставка</Link>
                    </li>
                    <li>
                        <Link to="" className='link'>О нас</Link>
                    </li>
                </ul>
            </nav>
            <IoSearch onClick={() => <Link to=""></Link>} className='search'/>
            <SlBasket onClick={() => <Link to=""></Link>} className='basket'/>
            <button onClick={() => <Link to=""></Link>} className='auth' >Войти</button>
        </header>
    )
}


export default Header;