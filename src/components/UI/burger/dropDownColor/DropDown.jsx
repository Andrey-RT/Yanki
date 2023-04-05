import React,{useState} from 'react';
import cl from './DropDown.module.css'
import arrow from '../../../../img/main/main_icon/black/arrow-black.png'

const DropDown = ({selected,setSelected}) => {
    const [isActive,setIsActive] = useState(false)
    const options = ['UAH','USD','EUR']
    return (
        <div className={cl.dropdown}>
            <div className={cl.dropdown_btn} onClick={e =>
            setIsActive(!isActive)}>
                {selected}
                <div className={cl.arrow_img}>
                <img src={arrow} alt="" /></div>
            </div>
           {isActive &&( <div className={cl.dropdown_content}>
               
               {options.map(options=>(
                <div className={cl.dropdown_item} onClick={e => {
                    setSelected( options)
                    setIsActive(false)
                }
                }>
                {options}
               </div>
               ))}
               
               
            </div>)
           
           
           }
        </div>
    );
};

export default DropDown;