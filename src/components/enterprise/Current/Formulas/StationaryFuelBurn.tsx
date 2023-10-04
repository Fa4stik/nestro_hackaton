import React, {useEffect, useState} from 'react';
import InputBorder from "../../../ui/Inputs/InputBorder";
import CurrentDataGrid from "../CurrentDataGrid";
import HeaderGrid from "../HeaderGrid";
import {GridColDef} from "@mui/x-data-grid";
import {TAllDataForTable, TAllFormulas, TStationaryFuelBurn} from "../types";
import {TAllOpt} from "../optTypes";

const columns: GridColDef[] = [
    {field: 'id', headerName: '№', width: 90},
    {
        field: 'fuel_consumption',
        headerName: 'Расход УВС',
        flex: 1,
        editable: true,
    },
];

type StationaryFuelBurnProps = {
    rows: TAllFormulas[]
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>;
    setOptValues: React.Dispatch<React.SetStateAction<TAllOpt>>;
    allDataForTable?: TAllDataForTable
}

const StationaryFuelBurn: React.FC<StationaryFuelBurnProps> = ({
            rows,
            setRows,
            setOptValues,
                                                                   allDataForTable
        }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const [stationaryFuelBurn, setStationaryFuelBurn] = useState<TStationaryFuelBurn>({} as TStationaryFuelBurn)

    useEffect(() => {
        setRows(allDataForTable!.resultStationaryFuelBurn)
    }, [])

    const handleChangeFuelConsumption = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setStationaryFuelBurn(prevState =>
            ({...prevState, fuel_consumption: value}));
    };

    const handleChangeEmissions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues(prevState =>
            ({...prevState, fuel_emissions: value}));
    };

    const handleChangeOxiCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues(prevState =>
            ({...prevState, oxi_coef: value}));
    };

    const handleChangeTransCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues(prevState =>
            ({...prevState, trans_coef: value}));
    };

    return (
        <>
            <form className="flex flex-col w-full mb-[10px]">
                <div className="mr-auto flex flex-wrap">
                    <InputBorder placeholder={'Расход топлива'} onChange={handleChangeFuelConsumption}/>
                </div>
                <HeaderGrid setRows={setRows} selectedRows={selectedRows} params={{...stationaryFuelBurn, id: 0}}/>
            </form>
            <CurrentDataGrid setSelectedRows={setSelectedRows} rows={rows} columns={columns}/>
            <div className="flex flex-wrap mt-[10px]">
                <InputBorder placeholder={'Коэф. выбросов'}
                             onChange={handleChangeEmissions}/>
                <InputBorder placeholder={'Коэф. окисления'}
                             onChange={handleChangeOxiCoef}/>
                <InputBorder placeholder={'Коэф. перевода'}
                             onChange={handleChangeTransCoef}/>
            </div>
        </>
    );
};

export default StationaryFuelBurn;