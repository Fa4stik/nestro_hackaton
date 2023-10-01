import React from 'react';
import buttonFill from "./ButtonFill";

type ButtonBorderProps = {
    children: React.ReactNode,
    icon: string,
    classStyle?: string
}

const ButtonBorder: React.FC<ButtonBorderProps> = ({children, icon, classStyle}) => {
    return (
        <button className={`border-solid border-[0.5px] border-mainBorder
        flex py-[5px] px-[20px] text-2xl rounded-2xl flex items-center
        hover:shadow-[0_0_10px_rgba(255,255,255,0.05)] ${classStyle}`}>
            {children}
            <img src={icon} alt="" className="ml-[10px] w-auto h-[20px]"/>
        </button>
    );
};

export default ButtonBorder;