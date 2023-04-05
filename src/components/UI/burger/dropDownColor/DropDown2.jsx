import React,{useState} from 'react';
import cl from './DropDown.module.css'
import arrow from '../../../../img/main/main_icon/black/arrow-black.png'

const DropDown = ({selectedLanguage,setSelectedLanguage}) => {
    const [isActive,setIsActive] = useState(false)
    const options = ['UA','EN','FR']
    return (
        <div className={cl.dropdown}>
            <div className={cl.dropdown_btn} onClick={e =>
            setIsActive(!isActive)}>
                {selectedLanguage}
                <img src={arrow} alt="" />
            </div>
           {isActive &&( <div className={cl.dropdown_content}>
               
               {options.map(options=>(
                <div className={cl.dropdown_item} onClick={e => {
                    setSelectedLanguage( options)
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