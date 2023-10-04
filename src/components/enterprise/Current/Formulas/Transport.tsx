import React, {useState} from 'react';
import InputBorder from "../../../ui/Inputs/InputBorder";
import CurrentDataGrid from "../CurrentDataGrid";
import {
    TAllFormulas,
    TFugitiveEmissions,
    TStationaryFuelBurn,
    TStationaryGasCoef,
    TTorchFuelBurn,
    TTransport
} from "../types";
import HeaderGrid from "../HeaderGrid";
import {GridColDef} from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {field: 'id', headerName: '№', width: 90},
    {
        field: 'fuelVolume',
        headerName: 'Расход топлива',
        width: 200,
        editable: true,
    },
    {
        field: 'rho',
        headerName: 'Плотность топлива',
        width: 200,
        editable: true,
    },
    {
        field: 'CO2Coef',
        headerName: 'Коэффициент СО2',
        flex: 1,
        editable: true,
    },
];

type TransportProps = {
    rows: TAllFormulas[]
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>;
}

const Transport: React.FC<TransportProps> = ({
                                                         rows,
                                                         setRows
                                                     }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const [currentDataObj, setCurrentDataObj] =
        useState<TTransport>({} as TTransport)

    const handleChangeFuelVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, fuelVolume: value}));
    };

    const handleChangeRho = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, rho: value}));
    };

    const handleChangeCO2Coef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, CO2Coef: value}));
    };

    return (
        <>
            <form className="flex flex-col w-full mb-[10px]">
                <div className="mr-auto flex flex-wrap">
                    <InputBorder placeholder={'Расход топлива'}
                                 onChange={handleChangeFuelVolume}/>
                    <InputBorder placeholder={'Плотность топлива'}
                                 onChange={handleChangeRho}/>
                    <InputBorder placeholder={'Коэффициент СО2'}
                                 onChange={handleChangeCO2Coef}/>
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

export default Transport;