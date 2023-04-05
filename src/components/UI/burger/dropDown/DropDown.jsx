import React,{useState} from 'react';
import './DropDown.css'
import arrow from '../../../../img/main/main_icon/line-down.png'

const DropDown = ({selected,setSelected}) => {
    const [isActive,setIsActive] = useState(false)
    const options = ['UAH','USD','EUR']
    return (
        <div className="dropdown">
            <div className="dropdown_btn" onClick={e =>
            setIsActive(!isActive)}>
                {selected}
                <div className="arrow_img">
                <img src={arrow} alt="" /></div>
            </div>
           {isActive &&( <div className="dropdown_content">
               
               {options.map(options=>(
                <div className="dropdown_item" onClick={e => {
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