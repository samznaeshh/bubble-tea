import React from "react";
import Content from "./content";
import { Link } from "react-router-dom";
import bubbleTea from "../img/bubble-tea.png";
import sirop from "../img/sirop.png";
import tapioka from "../img/tapioka.png";
 
function content() {
    return(
    <div className="con-catalog">
        <div className="menu">
            <h2>Каталог продукции</h2>
            <Link to="/catalog"><button className="tovars">Все товары</button></Link>
        </div>
        <div className="products">
            <Link to="" style={{ textDecoration: 'none' }}>
            <div className="item">
                <img src={bubbleTea} />готовые напитки</div></Link>
            <Link to="" style={{ textDecoration: 'none' }} >
            <div className="item">
                <img src={sirop} />сиропы</div></Link>
            <Link to="" style={{ textDecoration: 'none' }}>
            <div className="item">
                <img src={tapioka} />тапиока</div></Link>
        </div>
    </div>
    )
}

export default content;