import React, { useState } from 'react';
import search from '../../../../img/main/main_icon/black/search-black.png'
import people from '../../../../img/main/main_icon/black/people-red.png'
import heart from '../../../../img/main/main_icon/black/heard-red.png'
import basket from '../../../../img/main/main_icon/black/shop-red.png'
import { Link } from 'react-router-dom';
import arrowLine from '../../../../img/main/main_kategory/arrow-red.png'
import Order from '../../../pages/katalog/Order';

import Basket from '../../../pages/basket/Basket';










const showNothing = () => {
    return (<div>
        <h1>Корзина пуста...</h1>
    </div>)
}



const IconColor = (props) => {
    let [cardOpen, setCardOpen] = useState(false)
   
    

      const showOrders = (props) => {
      
   
    
        let suma = 0
        
        props.orders.forEach(el => suma += Number.parseFloat(el.price))
        return (<div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}   />
            ))}
            <p className="suma">Загальна сума: {new Intl.NumberFormat().format(suma)} грн</p>
        </div>)
    }
   
  

    
    return (
        <div className='icon_container'>
            <Link to="/new"  ><img src={search} alt="" /></Link>
            <Link to="/new"  ><img src={people} alt="" /></Link>
            <Link to="/new"  ><img src={heart} alt="" /></Link>

            <Link to="/katalog" onClick={() => setCardOpen(cardOpen = !cardOpen)}  ><img src={basket} alt="" /></Link>
            {cardOpen && (
                
                <div className='busket_container'>
                    <div>
                        <div className="busket_links">
                        <div className="link_line_conatiner">
           <Link className="link_line" to="/"  >Головна</Link>
            <img src={arrowLine} alt="" />
            <p className="link_line">Оплата та повернення</p>
            
           </div>
           
                        </div>
                        <h2 className='busket_name' >Ваше замовлення</h2>
                    </div>
                    {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}

                    <Basket  />


                </div>


            )}




        </div>
    );
};

export default IconColor;