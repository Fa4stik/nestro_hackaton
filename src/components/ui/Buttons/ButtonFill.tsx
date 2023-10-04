import React from 'react';

type ButtonFillProps = {
    children: React.ReactNode
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonFill: React.FC<ButtonFillProps> = ({children, onClick}) => {
    return (
        <button className="bg-mainWhite text-mainGray
        flex px-[20px] text-xl rounded-2xl flex items-center justify-center
        hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ButtonFill;