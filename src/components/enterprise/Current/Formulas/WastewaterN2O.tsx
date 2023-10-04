import React, {useState} from 'react';
import InputBorder from "../../../ui/Inputs/InputBorder";
import CurrentDataGrid from "../CurrentDataGrid";
import HeaderGrid from "../HeaderGrid";
import {GridColDef} from "@mui/x-data-grid";
import {TAllFormulas, TWasteWaterN2O} from "../types";
import {TAllOpt} from "../optTypes";

const columns: GridColDef[] = [
    {field: 'id', headerName: '№', width: 90},
    {
        field: 'prot',
        headerName: 'Потребление протеина',
        width: 300,
        editable: true,
    },
    {
        field: 'nWaste',
        headerName: 'Азот в отходах',
        flex: 1,
        editable: true,
    },
];

type WastewaterN2OProps = {
    rows: TAllFormulas[]
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>;
    setOptValues?: React.Dispatch<React.SetStateAction<TAllOpt>>;
}

const WastewaterN2O:
    React.FC<WastewaterN2OProps> = ({
                                     rows,
                                     setRows,
                                     setOptValues
                                 }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const [currentDataObj, setCurrentDataObj] =
        useState<TWasteWaterN2O>({} as TWasteWaterN2O)

    const handleChangeProt = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, prot: value}));
    };

    const handleChangeNWaste = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, nWaste: value}));
    };

    const handleChangeNCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues!(prevState =>
            ({...prevState, nCoef: value}))
    };

    const handleChangeUnconsProt = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues!(prevState =>
            ({...prevState, unconsProt: value}))
    };

    const handleChangeIndProt = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues!(prevState =>
            ({...prevState, indProt: value}))
    };

    const handleChangeWasteCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues!(prevState =>
            ({...prevState, wasteCoef: value}))
    };

    const handleChangeTransCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues!(prevState =>
            ({...prevState, wasteCoef: value}))
    };

    return (
        <>
            <form className="flex flex-col w-full mb-[10px]">
                <div className="mr-auto flex flex-wrap">
                    <InputBorder placeholder={'Потребление протеина'}
                                 onChange={handleChangeProt}/>
                    <InputBorder placeholder={'Азот в отходах'}
                                 onChange={handleChangeNWaste}/>
                </div>
                <HeaderGrid setRows={setRows}
                            selectedRows={selectedRows}
                            params={{...currentDataObj, id: 0}}/>
            </form>
            <CurrentDataGrid setSelectedRows={setSelectedRows}
                             rows={rows} columns={columns}/>
            <div className="flex flex-wrap mt-[10px]">
                <InputBorder placeholder={'Доля азота'}
                             onChange={handleChangeNCoef}/>
                <InputBorder placeholder={'Непотребленный протеин'}
                             onChange={handleChangeUnconsProt}/>
                <InputBorder placeholder={'Промышленный протеин'}
                             onChange={handleChangeIndProt}/>
                <InputBorder placeholder={'Выбросы N2O'}
                             onChange={handleChangeWasteCoef}/>
                <InputBorder placeholder={'Преобразование N2O'}
                             onChange={handleChangeTransCoef}/>
            </div>
        </>
    );
};

export default WastewaterN2O;