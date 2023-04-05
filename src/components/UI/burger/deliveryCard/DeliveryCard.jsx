import React from 'react';
import deliveryImg1 from '../../../../img/main/main_icon/exchange/step1.png'
import deliveryImg2  from '../../../../img/main/main_icon/exchange/step2.png'
import deliveryImg3  from '../../../../img/main/main_icon/exchange/step3.png'
import deliveryImg4  from '../../../../img/main/main_icon/exchange/step4.png'
import deliveryImg5 from '../../../../img/main/main_icon/exchange/step5.png'
import deliveryImg6 from '../../../../img/main/main_icon/exchange/step6.png'
import './DeliveryCard.css'
const DeliveryCard = () => {
    return (
        <div className='delivery_card_container'>
            <div className="delivery_card">
                <img src={deliveryImg1} alt="" />
                <p className="delivery_card_text">
                якщо замовлення не був використаний і збережений товарний вид(в тому числі не порушені бірки, ярлики, пакувальні матеріали)
                </p>
            </div>
            <div className="delivery_card">
                <img src={deliveryImg2} alt="" />
                <p className="delivery_card_text">
                повернення та обмін здійснюються протягом двох днів з моменту отримання замовлення
                </p>
            </div>
            <div className="delivery_card">
                <img src={deliveryImg3} alt="" />
                <p className="delivery_card_text">
                пусте повернення присутствует в кожній посилці
                </p>
            </div>
            <div className="delivery_card">
                <img src={deliveryImg4} alt="" />
                <p className="delivery_card_text">
                все расходы по обмену и возврату товара несет покупатель
                </p>
            </div>
            <div className="delivery_card">
                <img src={deliveryImg5} alt="" />
                <p className="delivery_card_text">
                після отримання повернення ми робимо переклад грошових коштів на карту клієнта
                </p>
            </div>
            <div className="delivery_card">
                <img src={deliveryImg6} alt="" />
                <p className="delivery_card_text">
                після отримання повернення ми робимо переклад грошових коштів на карту клієнта
                </p>
            </div>
            
        </div>
    );
};

export default DeliveryCard;