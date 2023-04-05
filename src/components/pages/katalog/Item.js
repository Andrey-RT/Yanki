import React, { Component } from 'react'


export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <img className='card_img' src={this.props.item.img} alt="" />
             <p className='card_names'>{this.props.item.name}</p>
             <b className='card_price'>{this.props.item.price} грн</b>
             <p className='card_size'>{this.props.item.size}</p>
             <p className='card_color'>{this.props.item.color}</p>
             <div className='add' onClick={()=> this.props.onAdd(this.props.item)}>Купити</div>
        </div>
     
    )
  }
}

export default Item