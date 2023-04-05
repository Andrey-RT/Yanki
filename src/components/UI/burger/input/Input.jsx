import React from 'react';
import './Input.css'

const Input = () => {
    return (
        <div>
            <p className="input_name">Дізнайсяя першим про новинки</p>
            <input type="text" name="text" class="input" placeholder="Ваш e-mail*"></input>
            <button className="input_button">Підписатись</button>
            <p className="detection_text">Натискаючи на кнопку «Підписатися», я запрошую на обробку моїх <br /> персональних даних і ознакомлен(а) з умовами конфіденційності.</p>
        </div>
    );
};

export default Input;