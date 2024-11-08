import React from "react";
import Content from "../home-content/content";
import { Link } from "react-router-dom";
import '../css/auth.css';
import left from '../img/left.png'

function registration() {
    return(
        <div className="all">
            <div className="authh">
                <div className="image-auth">
                    <img src={left} alt="" className="left"/>
                </div>
                <div className="input-auth">
                    <h5 className="auth-tex-main">Регистрация</h5>
                    <input type="text" placeholder="фио" className="inputt"/>
                    <input type="text" placeholder="почта" className="inputt"/>
                    <input type="text" placeholder="пароль" className="inputt"/>
                    <Link to='/Home'><button className="button-reg">Зарегистрироваться</button></Link>
                    <div className="reg-text">
                        <h5 className="auth-text1">Если у вас есть аккаунт </h5> <Link to='/auth' className="auth-text2" style={{ textDecoration: 'none' }}>Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default registration;