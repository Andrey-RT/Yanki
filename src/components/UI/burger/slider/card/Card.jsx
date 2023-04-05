import React from 'react';
import slider1 from '../../../../../img/main/main_kategory/1.png'
import slider2 from '../../../../../img/main/main_kategory/2.png'
import slider3 from '../../../../../img/main/main_kategory/3.png'
import slider4 from '../../../../../img/main/main_kategory/4.png'
import './Card.css'

const Card1 = () => {
    return (
        <div className='card_container'>
            <p className="card_name">Kуртки</p>
           <img src={slider1} alt="" />
            
        </div>
    );
};
export const Card2 = () => {
    return (
        <div className='card_container'>
            <p className="card_name">Пальто</p>
           <img src={slider2} alt="" />
            
        </div>
    );
};

export const Card3 = () => {
    return (
        <div className='card_container'>
            <p className="card_name">Шуби</p>
           <img src={slider3} alt="" />
            
        </div>
    );
};

export const Card4 = () => {
    return (
        <div className='card_container'>
            <p className="card_name">Парки</p>
           <img src={slider4} alt="" />
            
        </div>
    );
};



export default  Card1;