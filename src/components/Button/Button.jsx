import React,{useEffect} from "react";
import Style from './button.module.css'
import { Link } from "react-router-dom";
export const Button = ({ text, onClick, style, href,ContainerStyle }) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
     <Link to={href} className={Style.a} style={ContainerStyle}>
            <button
                className={Style.button}
                onClick={onClick}
                style={style}

            >
                {text}
            </button>
        </Link>
   

    )
}