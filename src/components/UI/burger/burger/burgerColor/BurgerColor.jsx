import React from 'react';
import cl from  './BurgerColor.module.css'

const BurgerColor = () => {
    return (
        <div>
           <label className={cl.burger} for={cl.burger}>
         <input type="checkbox" id={cl.burger}/>
             <span className={cl.first}></span>
             <span className={cl.sekond}></span>
            <span className={cl.third}></span>
                </label>
        </div>
    );
};

export default BurgerColor;