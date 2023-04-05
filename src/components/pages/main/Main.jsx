import React from 'react';
import HeaderNav from '../headerNav/HeadeNav';
import './Main.css';
import Slider from '../../UI/burger/slider/Slider';
import Input from '../../UI/burger/input/Input';
import Footer from '../../UI/burger/footer/Footer';

const main = () => {
    return (
        <div>
            
            
            <div className="first_block_container">
            <div className="first_block">
            <div className="header_nav">
            <HeaderNav />
            </div>
            <div className="header_text_conatiner">
                <p className="header_text">Нова колекція</p>
                <div className="header_line_container">
                <hr className="header_line" />
                </div>
                
                <p className="down_text">Дивитись новинки</p>
            </div>
            </div>
            
            </div>
            <div className="sekond_block_container">
            <div className="sekond_block">
                <p className="sekond_block_name">Категорії</p>
                <div className="slider_conatiner">
                <Slider />
                </div>
                <div className="input_conatiner">
                <Input />
                </div>
                <div className="footer_container">
                    <Footer />
                </div>
                
            </div>
            </div>

        </div>
    );
};

export default main;