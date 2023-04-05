
import React,{useState} from 'react';

import {Link} from 'react-router-dom'
import cl from './HeaderNavColor.module.css'
import logoImg from '../../../img/main/logo2.png'
import IconColor from '../../UI/burger/icon/IconColor';
import DropDown from '../../UI/burger/dropDownColor/DropDown'
import DropDown2 from '../../UI/burger/dropDownColor/DropDown2';
import BurgerColor from '../../UI/burger/burger/burgerColor/BurgerColor';






const HeaderNav = (props) => {
const[selected,setSelected] = useState('UAH')
const[selectedLanguage,setSelectedLanguage] = useState('UА')

    return (

        <div className={cl.nav_container}>
           <div > <BurgerColor />    </div>
          
           <div className={cl.nav_links}>
            <Link to="/new"  >New</Link>
            <Link to="/katalog"  >каталог</Link>
            <Link to="/about"  >про нас</Link>
            </div>
            <Link to="/"  > <img className={cl.header_logo} src={logoImg}  /></Link>
            <div className={cl.header_drop_down}>
                <DropDown selected={selected} setSelected={setSelected} />
                <DropDown2 selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
            </div>
            <div className={cl.nav_icon}>
                <IconColor  orders={props.orders} onDelete={props.onDelete}  />
            </div>
            
        </div>
    );
};

export default HeaderNav;