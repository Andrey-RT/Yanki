import React from 'react';
import search from '../../../../img/main/main_icon/search.png'
import people from '../../../../img/main/main_icon/people.png'
import heart from '../../../../img/main/main_icon/heart.png'
import basket from '../../../../img/main/main_icon/basket.png'
import { Link } from 'react-router-dom';

const Icon = () => {
    
    return (
        <div className='icon_container'>
               <Link to="/new"  ><img src={search} alt="" /></Link>
               <Link to="/new"  ><img src={people} alt="" /></Link>
               <Link to="/new"  ><img src={heart} alt="" /></Link>
               <Link to="/basket"  ><img src={basket} alt="" /></Link>
               
            
        </div>
    );
};

export default Icon;