import React from 'react';
import {BG} from "../../img";
import {useNavigate} from "react-router-dom";

const Lending: React.FC = () => {
    const navigate = useNavigate();
    const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/enterprises')
    };

    return (
        <div className="h-screen w-screen relative font-rubikRg">
            <div className="w-full h-full flex items-center">
                <div className="flex flex-col ml-[200px] text-[#E9E9EA]">
                    <h1 className="font-rubikMd text-9xl mb-[20px] drop-shadow-lending cursor-default">
                        NESTRO
                    </h1>
                    <h3 className="text-6xl w-[1092px] mb-[60px] drop-shadow-lending cursor-default">
                        Создай своё предприятие и управляй его ресурсами
                    </h3>
                    <button className="w-[210px] h-[60px] bg-mainWhite
                    text-mainGray text-2xl rounded-full hover:bg-gray-300 shadow-lending"
                            onClick={handleRedirect}
                    >
                        Начать
                    </button>
                </div>
                <img src={BG.main} alt="" className="w-full h-full absolute z-[-1]"/>
            </div>
        </div>
    );
};

export default Lending;