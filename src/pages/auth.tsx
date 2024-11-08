import React from "react";
import Content from "../home-content/content";
import { Link } from "react-router-dom";
import '../css/auth.css';
import right from '../img/right.png'

function auth() {
    return(
        <div className="all">
            <div className="authh">
                <div className="input-auth">
                    <h5 className="auth-tex-main">Вход</h5>
                    <input type="text" placeholder="почта" className="inputt"/>
                    <input type="text" placeholder="пароль" className="inputt"/>
                    <Link to='/Home'><button className="button-auth">Войти</button></Link>
                    <div className="auth-text">
                        <h5 className="auth-text1">Если у вас еще нет аккаунта </h5> <Link to='/registration' className="auth-text2" style={{ textDecoration: 'none' }}>Зарегистрируйтесь</Link>
                    </div>
                </div>
                <div className="image-auth">
                    <img src={right} alt="" className="right"/>
                </div>
            </div>
        </div>
    )
}

export default auth;