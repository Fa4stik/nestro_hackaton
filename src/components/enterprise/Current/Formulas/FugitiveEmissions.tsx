import React, {useState} from 'react';
import InputBorder from "../../../ui/Inputs/InputBorder";
import CurrentDataGrid from "../CurrentDataGrid";
import {TAllFormulas, TFugitiveEmissions, TStationaryFuelBurn, TStationaryGasCoef} from "../types";
import HeaderGrid from "../HeaderGrid";
import {GridColDef} from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {field: 'id', headerName: '№', width: 90},
    {
        field: 'fuel_consumption',
        headerName: 'Расход смеси',
        width: 200,
        editable: true,
    },
    {
        field: 'CO2_coef',
        headerName: 'Содержание СО2',
        width: 200,
        editable: true,
    },
    {
        field: 'CH4_coef',
        headerName: 'Содержание СН4',
        flex: 1,
        editable: true,
    },
];

type FugitiveEmissionsProps = {
    rows: TAllFormulas[]
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>;
}

const FugitiveEmissions: React.FC<FugitiveEmissionsProps> = ({
                                                                   rows,
                                                                   setRows
                                                               }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const [currentDataObj, setCurrentDataObj] = useState<TFugitiveEmissions>({} as TFugitiveEmissions)

    const handleChangeFuelConsumption = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, fuel_consumption: value}));
    };

    const handleChangeCO2ContentCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, CO2_coef: value}));
    };

    const handleChangeCH4ContentCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, CH4_coef: value}));
    };

    return (
        <>
            <form className="flex flex-col w-full mb-[10px]">
                <div className="mr-auto flex flex-wrap">
                    <InputBorder placeholder={'Расход смеси'} onChange={handleChangeFuelConsumption}/>
                    <InputBorder placeholder={'Содержание СО2'} onChange={handleChangeCO2ContentCoef}/>
                    <InputBorder placeholder={'Содержание СН4'} onChange={handleChangeCH4ContentCoef}/>
                </div>
                <HeaderGrid setRows={setRows} selectedRows={selectedRows} params={{...currentDataObj, id: 0}}/>
            </form>
            <CurrentDataGrid setSelectedRows={setSelectedRows} rows={rows} columns={columns}/>
        </>
    );
};

export default FugitiveEmissions;