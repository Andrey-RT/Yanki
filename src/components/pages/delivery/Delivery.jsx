import React from 'react';
import {Link} from 'react-router-dom'
import './Delivery.css'
import HeaderNavColor from '../headerNavColor/HeaderNavColor';
import arrowLine from '../../../img/main/main_kategory/arrow-red.png'
import DeliveryCard from '../../UI/burger/deliveryCard/DeliveryCard';
import Footer from '../../UI/burger/footer/Footer';

const Delivery = () => {
    return (
        <div >
            <div className="delivery_block_container">
            <div className="delivery_block">
           <HeaderNavColor />
           <div className="container">
           <div className="link_line_conatiner">
           <Link className="link_line" to="/"  >Головна</Link>
            <img src={arrowLine} alt="" />
            <p className="link_line">Обмін і повернення</p>
           </div>
            <p className="name_page">Обімін і повернення</p>
            <p className="text_page">Якщо ви не подошли замовлення, ми з задоволенням вам його обміняємо або примемо повернення</p>
            <p className="text_page">Обмін і повернення можливе в разі</p>
            <div className="delivery_conatiner">
            <DeliveryCard />
            </div>
            
                <div className="delivery_footer_conatiner">
                    <Footer />
                </div>

           </div>
           </div>
           </div>
        </div>
    );
};

export default Delivery;