import React from 'react';
import './Footer.css'
import instagram from '../../../../img/main/instagram.png'
import telegram from '../../../../img/main/telegram.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (<div>
        <div className="footer_container_bloks">
            <div className="footer_bloks">
                <p className="footer_name">Компанія</p>
                <p className="footer_link">Про нас</p>
                <p className="footer_link">Контакти</p>
            </div>
            <div className="footer_bloks">
                <p className="footer_name">Корисне</p>
                <div className="footer_link">
                <Link className="footer_link"  to="/delivery"  >Оплата та доставка</Link> 
                </div>
               
                <div className="footer_link" >
                <Link className="footer_link"  to="/exchange"  >Умови повернення</Link></div>
                <p className="footer_link">Бонусна система</p>
            </div>
            <div className="footer_bloks">
                <p className="footer_name">Покупцю</p>
                <p className="footer_link">Вибране</p>
                <p className="footer_link">Публічна офетра</p>
                <p className="footer_link">Політика конфиденційності</p>
            </div>
            <div className="footer_bloks">
                <p className="footer_name">Контакти</p>
                <div className="footer_icon">
                    <img src={instagram} alt="" />
                    <img src={telegram} alt="" />
                </div>
                <p className="footer_link">+38(073) 096 36 44</p>
                <p className="footer_link">info@yanki.com </p>
            </div>
        </div>

        <div className="footer_line">©️ 2021 Yanki. All rights reserved</div>
        
        </div>
    );
};

export default Footer;