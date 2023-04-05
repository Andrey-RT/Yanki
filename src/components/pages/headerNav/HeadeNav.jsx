
import React,{useState} from 'react';
import Burger from '../../UI/burger/burger/Burger';
import {Link} from 'react-router-dom'
import './HeaderNav.css'
import logoImg from '../../../img/main/logo.png'
import Icon from '../../UI/burger/icon/Icon';
import DropDown from '../../UI/burger/dropDown/DropDown'
import DropDown2 from '../../UI/burger/dropDown/DropDown2';

const HeaderNav = () => {
const[selected,setSelected] = useState('UAH')
const[selectedLanguage,setSelectedLanguage] = useState('UА')
    return (
        <div className='nav_container'>
           <div className=""> <Burger />    </div>
          
           <div className="nav_links">
            <Link to="/new"  >New</Link>
            <Link to="/katalog"  >каталог</Link>
            <Link to="/about"  >про нас</Link>
            </div>
            
            <a href="">
            <img className="header_logo" src={logoImg}  />
            </a>
            
            
            
            
            
            
            <div className="header_drop_down">
                <DropDown selected={selected} setSelected={setSelected} />
                <DropDown2 selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
            
            
            </div>






            <div className="nav_icon">
                <Icon />
            </div>
        </div>
    );
};

export default HeaderNav;