import React from 'react';

type InputBorderProps = {
    placeholder: string,
    classStyle?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputBorder: React.FC<InputBorderProps> = ({placeholder, onChange, classStyle}) => {
    return (
        <input type="text" className={'bg-transparent border-solid border-[0.5px] border-mainBorder ' +
            'px-[10px] py-[5px] text-lg placeholder-[#3B3B3B] rounded-md mr-[20px] mb-[10px] ' +
            'focus:shadow-[0_0_10px_rgba(255,255,255,0.1)]  focus:ring-sky-500 focus:outline-none ' + classStyle}
               placeholder={placeholder}
               onChange={onChange}
        />
    );
};

export default InputBorder;