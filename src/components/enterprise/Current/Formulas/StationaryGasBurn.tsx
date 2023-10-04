import React, {useState} from 'react';
import InputBorder from "../../../ui/Inputs/InputBorder";
import HeaderGrid from "../HeaderGrid";
import CurrentDataGrid from "../CurrentDataGrid";
import {GridColDef} from "@mui/x-data-grid";
import {TAllFormulas, TStationaryGasBurn} from "../types";
import {TAllOpt} from "../optTypes";

const columns: GridColDef[] = [
    {field: 'id', headerName: '№', width: 90},
    {
        field: 'fuel_consumption',
        headerName: 'Расход УВС',
        width: 300,
        editable: true,
    },
    {
        field: 'gas_coef_id',
        headerName: 'Ид коэф. газа',
        flex: 1,
        editable: true,
    },
];

type StationaryGasBurnProps = {
    rows: TAllFormulas[]
    setOptValues: React.Dispatch<React.SetStateAction<TAllOpt>>;
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>
}

const StationaryGasBurn: React.FC<StationaryGasBurnProps> = ({
                                                                 rows,
                                                                 setRows,
                                                                 setOptValues
                                                             }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const [currentDataObj, setCurrentDataObj] = useState<TStationaryGasBurn>({} as TStationaryGasBurn)

    const handleChangeFuel_consumption = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, fuel_consumption: value}));
    };

    const handleChangeGas_coef_id = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, gas_coef_id: value}));
    };

    const handleChangeOxi_coef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues(prevState =>
            ({...prevState, idMixed: value}));
    };

    return (
        <>
            <form className="flex flex-col w-full mb-[10px]">
                <div className="mr-auto flex flex-wrap">
                    <InputBorder placeholder={'Расход УВС'}
                                 onChange={handleChangeFuel_consumption}
                                 classStyle="w-[300px]"
                    />
                    <InputBorder placeholder={'Ид коэф. газа'}
                                 onChange={handleChangeGas_coef_id}
                                 classStyle="w-[300px]"
                    />
                </div>
                <HeaderGrid setRows={setRows} selectedRows={selectedRows} params={{...currentDataObj, id: 0}}/>
            </form>
            <CurrentDataGrid setSelectedRows={setSelectedRows} rows={rows} columns={columns}/>
            <div className="flex flex-wrap mt-[10px]">
                <InputBorder placeholder={'Коэф. оксисления'}
                             onChange={handleChangeOxi_coef}/>
            </div>
        </>
    );
};

export default StationaryGasBurn;