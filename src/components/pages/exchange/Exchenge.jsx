import React from 'react';
import './Exchange.css'


import {Link} from 'react-router-dom'

import HeaderNavColor from '../headerNavColor/HeaderNavColor';
import arrowLine from '../../../img/main/main_kategory/arrow-red.png'
import step1 from '../../../img/main/main_icon/step1.png'
import step2 from '../../../img/main/main_icon/step2.png'
import step3 from '../../../img/main/main_icon/step3.png'
import Footer from '../../UI/burger/footer/Footer';


const Exchenge = () => {
    return (
        <div>
             <div className="delivery_block_container">
            <div className="delivery_block">
           <HeaderNavColor />
           <div className="container">
           <div className="link_line_conatiner">
           <Link className="link_line" to="/"  >Головна</Link>
            <img src={arrowLine} alt="" />
            <p className="link_line">Оплата та повернення</p>
           </div>
            <p className="name_page">Оплата та повернення</p>
          
            <div className="list">
                <div className="list_container">
                <p className="text_page">Ви можете оплатити покупку одним із нижче перерахованих способів:</p>
                <li className='exchange_list'> накладеним платежем у відділенні Нової Пошти</li>
                    <li className='exchange_list'> накладеним платежем у відділенні Нової Пошти</li>
                    <li className='exchange_list'> накладеним платежем у відділенні Нової Пошти</li>
                </div>

                <div className="list_container">
                <p className="text_page">Ви можете оплатити покупку одним із нижче перерахованих способів:</p>
                <li className='exchange_list'> накладеним платежем у відділенні Нової Пошти</li>
                    <li className='exchange_list'> накладеним платежем у відділенні Нової Пошти</li>
                    <li className='exchange_list'> накладеним платежем у відділенні Нової Пошти</li>
                </div>
                    
                    
                
            </div>
            <div className="liqpay_container">
            <p className="text_page">Ви можете оплатити покупку одним із нижче перерахованих способів:</p>
            <div className="liqpay_line">
                    <div className="liqpay">
                        <img src={step1} alt="" />
                        <p className="text_page">Выбрать в корзине способ оплаты "LIQPAY"</p>
                    </div>
                    <div className="liqpay">
                        <img src={step2} alt="" />
                        <p className="text_page">Підтвердити замовлення</p>
                    </div>
                    <div className="liqpay">
                        <img src={step3} alt="" />
                        <p className="text_page">Після цього Ви перенаправляєтеся на сайт LIQPAY, де вибираєте зручний для Вас спосіб оплати: через Приват24 або за допомогою картки Mastercard/VISA з усього світу.</p>
                    </div>
            </div>
            </div>
            
            
                <div className="exchange_footer_conatiner">
                    <Footer />
                </div>

           </div>
           </div>
           </div>

        </div>
    );
};

export default Exchenge;