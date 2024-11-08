import React from 'react';
import image from '../img/image.png';
import { Link } from "react-router-dom";

function top() {
    return(
    <div className='top'>
        <div className="left">
            <h1>МОРЕ УДОВОЛЬСТВИЯ В КАЖДОЙ БАНКЕ</h1>
            <div className="links">
                <Link to="" style={{ textDecoration: 'none' }}><div className="catalog"><h3>ПЕРЕЙТИ <br/> В КАТАЛОГ</h3></div></Link>
                <div className="two">
                    <Link to="" style={{ textDecoration: 'none' }}><div className="stocks"><h3>АКЦИИ</h3></div></Link>
                    <Link to="" style={{ textDecoration: 'none' }}><div className="delivery"><h3>ДОСТАВКА</h3></div></Link>
                </div>
            </div>
        </div>
        <img src={image} className='bubble'/>
    </div>
 )
}

export default top;