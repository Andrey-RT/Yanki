import React, { Component } from 'react'
import cl from './Order.module.css'
import './Katalog.css'
import DropDownClass from '../../UI/burger/dropClass/DropDownClass'
import DropDownColor from '../../UI/burger/dropClass/DropDownColor'
import basket from '../../../img/main/main_icon/removed.png'
import Counter from '../../UI/burger/counter/Counter'



export class Order extends Component {
 


  render() 
  
  { 
    
    return (
      <div className={cl.item}>
        <div className={cl.item_img_container}>
             <img className={cl.card_img} src={this.props.item.img} alt="" />

             <p className={cl.card_names}>{this.props.item.name}</p>
             </div>
             
             <DropDownColor />
             
            
           
            
             <DropDownClass />
             <Counter   />
             
             
            
             
             <p className={cl.card_price}>{this.props.item.price} грн</p>
            

              <button className='busket_btn' onClick={()=>{this.props.onDelete(this.props.item.id)}}><img src={basket} alt="" /></button>
             
      </div>
    )
  }
  
  
}


export default Order

