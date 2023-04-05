import React from 'react';
import HeaderNav from '../headerNavColor/HeaderNavColor';
import {Link} from 'react-router-dom'
import arrowLine from '../../../img/main/main_kategory/arrow-red.png'
import './Katalog.css'
import card1 from '../../../img/main/katalog/1.png'
import card2 from '../../../img/main/katalog/2.png'
import card3 from '../../../img/main/katalog/3.png'
import card4 from '../../../img/main/katalog/4.png'
import Items from './Items';
import Categories from './Categories';
import DropDownClass from '../../UI/burger/dropClass/DropDownClass';
import DropDownColor from '../../UI/burger/dropClass/DropDownColor';
import DropDownPrice from '../../UI/burger/dropClass/DropDownPrice';
import DropDownSort from '../../UI/burger/dropClass/DropDownSort';







class Katalog extends React.Component  {
    constructor(props){
        super(props)
        this.state={
            orders:[],
            currentItem:[],
            items:[
                {id:1,
                    img:card1,
                    name:'Бежева шуба',
                    price:'2900',
                    size:'XXS XS S M L',
                    color:'white',
                    category:'shuba',
                  
                 
                },
                {id:2,
                    img:card4,
                    name:'Біла куртка',
                    price:'2900',
                    size:'S M L ',
                    color:'black',
                    category:'kyrtka',
                },
                {id:3,
                    img:card2,
                    name:'Синя парка',
                    price:'3150',
                    size:'SX M L',
                    color:'black',
                    category:'kyrtka',
                },
                {id:4,
                    img:card1,
                    name:'Бежева шуба',
                    price:'2900',
                    size:'XXS XS S M L',
                    color:'white',
                    category:'shuba',
                  
                 
                },
                {id:5,
                    img:card4,
                    name:'Біла куртка',
                    price:'2900',
                    size:'S M L ',
                    color:'all',
                    category:'kyrtka',
                },
                {id:6,
                    img:card3,
                    name:'Пальто',
                    price:'4200',
                    size:'M L S',
                    color:'black',
                    category:'palto'
                },
                {id:7,
                    img:card3,
                    name:'Пальто',
                    price:'4200',
                    size:'M L S',
                    color:'black',
                    category:'palto'
                },
                {id:8,
                    img:card4,
                    name:'Біла куртка',
                    price:'2900',
                    size:'S M L ',
                    color:'all',
                    category:'kyrtka',
                },
                {id:9,
                    img:card1,
                    name:'Бежева шуба',
                    price:'2900',
                    size:'XXS XS S M L',
                    color:'white',
                    category:'shuba',
                  
                 
                },
                {id:10,
                    img:card3,
                    name:'Пальто',
                    price:'4200',
                    size:'M L S',
                    color:'black',
                    category:'palto'
                },
                {id:11,
                    img:card3,
                    name:'Пальто',
                    price:'4200',
                    size:'M L S',
                    color:'black',
                    category:'palto'
                },
                {id:12,
                    img:card4,
                    name:'Біла куртка',
                    price:'2900',
                    size:'S M L ',
                    color:'black',
                    category:'kyrtka',
                },
            ]
        }
        this.addToOrder= this.addToOrder.bind(this)
        this.deleteOrder= this.deleteOrder.bind(this)
        this.state.currentItem = this.state.items
        this.choseCategory= this.choseCategory.bind(this)
        
    }
    
   
    render(){
    return (
        <div>
            <HeaderNav orders={this.state.orders} onDelete={this.deleteOrder} />
            <div className="katalog_container">
            <div className="link_line_conatiner">
           <Link className="link_line" to="/"  >Головна</Link>
            <img src={arrowLine} alt="" />
            <p className="link_line">Оплата та повернення</p>
           </div>
           <div className="katalog_main_container">
            <div className="katalog_filter">
                <p className="katalog_name">Каталог</p>
                <div className="filter_btn_container">
                <Categories choseCategory={this.choseCategory} />
                    
                </div>
            </div>
            <div className="katalog_content">
                <div className="katalog_sort">
                <DropDownClass />
                <DropDownColor />
                <DropDownPrice />
                <DropDownSort />
                
                    
                </div>
                
                <div className="katalog_card_container">
                  
                   <Items onAdd={this.addToOrder} items={this.state.currentItem} />
                   
                </div>
            </div>
           </div>
           </div>
        </div>
    );
    
    
}

deleteOrder(id){
    this.setState({orders:this.state.orders.filter(el=>el.id!== id)})
}

addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el =>{
        if(el.id === item.id)
        isInArray=true
    })
    if(!isInArray)

    this.setState({orders:[...this.state.orders,item]}

        )
        
}

choseCategory(category){
    
    if(category === 'all'){
        this.setState({currentItem:this.state.items})
        
        return
    }
    this.setState({
        currentItem:this.state.items.filter(el =>el.category === category)
        
    })
    
}

}


export default Katalog;