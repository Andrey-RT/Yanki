import React,{useState} from 'react';
import './DropDown.css'
import arrow from '../../../../img/main/main_icon/line-down.png'

const DropDown = ({selectedLanguage,setSelectedLanguage}) => {
    const [isActive,setIsActive] = useState(false)
    const options = ['UA','EN','FR']
    return (
        <div className="dropdown">
            <div className="dropdown_btn" onClick={e =>
            setIsActive(!isActive)}>
                {selectedLanguage}
                <img src={arrow} alt="" />
            </div>
           {isActive &&( <div className="dropdown_content">
               
               {options.map(options=>(
                <div className="dropdown_item" onClick={e => {
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