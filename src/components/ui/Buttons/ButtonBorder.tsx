import React from 'react';
import buttonFill from "./ButtonFill";

type ButtonBorderProps = {
    children: React.ReactNode,
    icon?: string,
    classStyle?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonBorder: React.FC<ButtonBorderProps> = ({
        children,
        icon,
        classStyle,
        onClick
    }) => {
    return (
        <button className={`border-solid border-[0.5px] border-mainBorder
        flex py-[5px] px-[20px] text-xl rounded-2xl flex items-center justify-center
        hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] ${classStyle}`}
                onClick={onClick}
        >
            {children}
            {icon && <img src={icon} alt="" className="ml-[10px] w-auto h-[20px]"/>}
        </button>
    );
};

export default ButtonBorder;