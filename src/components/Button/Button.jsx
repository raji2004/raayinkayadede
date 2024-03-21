import React from "react";
import Style from './button.module.css'
export const Button = ({ text, onClick, style, href }) => {
    return (
        <a href={href} className={Style.a}>
            <button
                className={Style.button}
                onClick={onClick}
                style={style}

            >
                {text}
            </button>
        </a>

    )
}