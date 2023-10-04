import React from 'react';
import ButtonBorder from "../../ui/Buttons/ButtonBorder";
import ButtonFill from "../../ui/Buttons/ButtonFill";
import {icons} from "../../../img";
import {TAllFormulas} from "./types";

type HeaderGridProps = {
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>;
    selectedRows: number[];
    params: TAllFormulas;
}

const HeaderGrid: React.FC<HeaderGridProps> = ({setRows, selectedRows, params}) => {

    const handleAddRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRows(prevState => [...prevState, {
            ...params,
            id: prevState.length > 0 ? prevState.at(-1)!.id+1 : 1,
        }])
    };

    const handleDeleteRow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRows(prevState =>
            prevState.filter(row =>
                !selectedRows.includes(row.id)
            )
        )
    };

    const handleUploadCsv = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    };

    return (
        <div className="flex mt-[10px]">
            <ButtonBorder onClick={handleDeleteRow}
                          classStyle="mr-[10px]"
            >
                Удалить
            </ButtonBorder>
            <ButtonFill onClick={handleAddRow}>
                Добавить
            </ButtonFill>
            <ButtonBorder onClick={handleUploadCsv}
                          classStyle="ml-auto"
                          icon={icons.csv}
            >
                Загрузить
            </ButtonBorder>
        </div>
    );
};

export default HeaderGrid;