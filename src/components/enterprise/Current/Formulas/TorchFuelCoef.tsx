import React, {useState} from 'react';
import InputBorder from "../../../ui/Inputs/InputBorder";
import CurrentDataGrid from "../CurrentDataGrid";
import {TAllFormulas, TTorchFuelCoef} from "../types";
import HeaderGrid from "../HeaderGrid";
import {GridColDef} from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {field: 'id', headerName: '№', width: 90},
    {
        field: 'idMixed',
        headerName: 'Номер смеси',
        width: 150,
        editable: true,
    },
    {
        field: 'chem_content',
        headerName: 'Объёмная доля комп.',
        width: 150,
        editable: true,
    },
    {
        field: 'chem_formula',
        headerName: 'Моли углерода',
        width: 150,
        editable: true,
    },
];

type TorchFuelCoefProps = {
    rows: TAllFormulas[]
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>;
}

const TorchFuelCoef:
    React.FC<TorchFuelCoefProps> = ({
                                     rows,
                                     setRows,
                                 }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const [currentDataObj, setCurrentDataObj] =
        useState<TTorchFuelCoef>({} as TTorchFuelCoef)

    const handleChangeIdMixed = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, idMixed: value}));
    };

    const handleChangeChem_content = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, chem_content: value}));
    };

    const handleChangeChem_formula = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentDataObj(prevState =>
            ({...prevState, chem_formula: e.target.value}));
    };

    return (
        <>
            <form className="flex flex-col w-full mb-[10px]">
                <div className="mr-auto flex flex-wrap">
                    <InputBorder placeholder={'Номер смеси'}
                                 onChange={handleChangeIdMixed}/>
                    <InputBorder placeholder={'Объёмная доля комп.'}
                                 onChange={handleChangeChem_content}/>
                    <InputBorder placeholder={'Химическая формула'}
                                 onChange={handleChangeChem_formula}/>
                </div>
                <HeaderGrid setRows={setRows}
                            selectedRows={selectedRows}
                            params={{...currentDataObj, id: 0}}/>
            </form>
            <CurrentDataGrid setSelectedRows={setSelectedRows}
                             rows={rows} columns={columns}/>
        </>
    );
};

export default TorchFuelCoef;