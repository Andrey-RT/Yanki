import React from 'react';
import   './Burger.css'

const Burger = () => {
    return (
        <div>
           <label className="burger" for="burger">
         <input type="checkbox" id="burger"/>
             <span className="first"></span>
             <span className="sekond"></span>
            <span className="third"></span>
                </label>
        </div>
    );
};

export default Burger;