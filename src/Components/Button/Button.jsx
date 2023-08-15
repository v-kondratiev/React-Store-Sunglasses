import React from 'react';
import style from './Button.module.scss'

const Button = () => {
    return (
        <div>
            <button>
                hover me
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
                <span className="fourth"></span>
            </button>
        </div>
    );
};

export default Button;