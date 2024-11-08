import React from 'react';
import { Link } from "react-router-dom";
import character from "../img/character.png"

function reviews() {
    return(
    <div className='reviews'>
        <div className="reviews2">
            <h2>Отзывы</h2>
        </div>
        <div className="rev-items">
            <div className="rev-item">
                <div className="character">
                    <img src={character} alt="" className='character-img'/>
                    <h4>Андреев Андрей</h4>
                </div>
                <div className="rev">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Veritatis vero nostrum illo accusantium ex facilis, eos, voluptate natus porro eum quis soluta voluptates 
                    illum recusandae quidem non eveniet dolorem quasi?Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Veritatis vero nostrum illo accusantium ex facilis, eos, voluptate natus porro eum quis soluta voluptates 
                    illum recusandae quidem non eveniet dolorem quasi?Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Veritatis vero nostrum illo accusantium ex facilis, eos, voluptate natus porro eum quis soluta voluptates 
                    illum recusandae quidem non eveniet dolorem quasi?</div>
            </div>
            <div className="rev-item">
                <div className="character">
                    <img src={character} alt="" className='character-img'/>
                    <h4>Андреев Андрей</h4>
                </div>
                <div className="rev">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Veritatis vero nostrum illo accusantium ex facilis, eos, voluptate natus porro eum quis soluta voluptates 
                    illum recusandae quidem non eveniet dolorem quasi?</div>
            </div>
        </div>
    </div>
 )
}

export default reviews;