import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Header: React.FC = () => {
    const [selected, setSelected] = useState<string>('enterprises');
    const navigate = useNavigate();

    const indicatorRef = useRef<HTMLDivElement | null>(null);

    const handleSelectedEntr = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setSelected('enterprises')
        if (indicatorRef.current) {
            indicatorRef.current.style.left = '0px';
            indicatorRef.current.style.width = '125px';
        }
        navigate('/enterprises')
    };

    const handleSelectedMap = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setSelected('map')
        if (indicatorRef.current) {
            indicatorRef.current.style.left = '162px';
            indicatorRef.current.style.width = '53px';
        }
    };

    return (
        <div className="w-full py-[15px] px-[40px] border-solid border-b-[0.5px]
        border-mainBorder flex text-mainWhite items-center">
            <a className="mr-auto text-3xl font-rubikMd cursor-pointer"
               onClick={() => navigate('/')}>OIL DATA</a>
            <div className="ml-auto text-xl flex items-center relative">
                <a href="#" className="mr-[40px] cursor-pointer"
                   onClick={handleSelectedEntr}
                >
                    Предприятия
                </a>
                <a href="#" className="cursor-pointer" onClick={handleSelectedMap}>
                    Карта
                </a>
                <div className="absolute top-[-19px] left-0 w-[125px] h-[2px] bg-[#39E3BA]
                shadow-[0_0_25px_#39E3BA] transition-header rounded-full"
                     ref={indicatorRef}></div>
            </div>
        </div>
    );
};

export default Header;