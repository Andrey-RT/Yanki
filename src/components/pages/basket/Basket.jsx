import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../UI/burger/footer/Footer';
import './Basket.css'


const Basket = (props) => {
  return (
    <div>
      <div className="busket_info">
                        <h3 className='busket_name'>Оформлення замовлення</h3>
                        <div className="busket_container_flex">
                        <div className="busket_left">
                        <p className='busket_name_inputs'>Персональні дані</p>
                        <div className="busket_inputs">
                            <input type="text" name="text" class="input" placeholder="Ваше ім'я*"></input>
                            <input type="text" name="text" class="input" placeholder="Ваше прізвище*"></input>
                            <input type="text" name="text" class="input" placeholder="Ваш телефон*"></input>
                            <input type="text" name="text" class="input" placeholder="Ваш e-mail*"></input>
                        </div>
                        <div className="busket_radio_delivery">
                            <p>Спосіб доставки</p>
                            <p className='radio_delivery_name'>По Україні</p>
                            <div className="radio_delivery">
                                <div class="radio-container">

                                    <form>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Самовивіз</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Нова Пошта</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Укр пошта</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>DHL</span>
                                        </label>
                                    </form>
                                </div>
                                


                            </div>
                        </div>
                        <p className='busket_name_input'>Спосіб доставки</p>
                        <div className="busket_input_delivery">
                        <input type="text" name="text" class="input" placeholder="Ваше ім'я*"></input>
                        <input type="text" name="text" class="input" placeholder="Ваше ім'я*"></input>
                        </div>
                        <div className="radio_pay">
                        <p className='busket_name_radio'>Ви можете оплатити покупку одним із нижче перерахованих способів:</p>
                                <div class="radio-container">

                                    <form>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Повна оплата Приват 24</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Наложений</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            <span>Перевод VISA</span>
                                        </label>
                                        
                                    </form>
                                </div>
                                


                            </div>
                            <div className="basket_bonus">
                            <p className='busket_name_radio'>Використання бонусного рахунку:</p>
                            <input type="text" name="text" class="input" placeholder="Ваше ім'я*"></input>
                            </div>
                            </div>
                            <div className="busket_right">
                              <div className="busket_link_container">
                              <Link className="busket_link_active" to="/"  >Вхід в особистий кабінет</Link>
                              <Link className="busket_link" to="/"  >Умови доставки</Link>
                              <Link className="busket_link" to="/"  >Умови обміну і повернення</Link>
                              <Link className="busket_link" to="/"  >Інформація про оплату</Link>
                              </div>
                              <div className="busket_pay_container">
                                <div className="busket_pay_line">
                                  <p className="pay_name">Доставка:</p>
                                  <p className="pay_info">fsdf</p>
                                </div>
                                <div className="busket_pay_line">
                                  <p className="pay_name">Бонуси:</p>
                                  <p className="pay_info">sdf</p>
                                </div>
                                <div className="busket_pay_line">
                                  <p className="pay_name">Загальна сума:</p>
                                  <p className="pay_info"></p>
                                </div>
                              </div>
                              <div className="busket_btn_container">
                                <button className='busket_btn_all'>Оформити замовлення</button>
                                <p className="busket_btn_text">Натискаючи на кнопку «оплатити замовлення», я приймаю умови публічної пропозиції та політику конфіденційності</p>
                              </div>
                            </div>

                            </div>


                        <Footer />
                    </div>
    </div>
  );
};

export default Basket;