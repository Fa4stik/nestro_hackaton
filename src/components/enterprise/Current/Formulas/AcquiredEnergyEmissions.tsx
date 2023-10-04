import React, {useEffect, useState} from 'react';
import InputBorder from "../../../ui/Inputs/InputBorder";
import CurrentDataGrid from "../CurrentDataGrid";
import HeaderGrid from "../HeaderGrid";
import {GridColDef} from "@mui/x-data-grid";
import {TAcquiredEnergyEmissions, TAllDataForTable, TAllFormulas} from "../types";
import {$api} from "../../../../api/createApi";

const columns: GridColDef[] = [
    {field: 'id', headerName: '№', width: 90},
    {
        field: 'energy_cons',
        headerName: 'Энергетические выбросы',
        width: 300,
        editable: true,
    },
    {
        field: 'coef',
        headerName: 'Региональный коэффициент',
        flex: 1,
        editable: true,
    },
];

type AcquiredEnergyEmissionsProps = {
    rows: TAllFormulas[]
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>;
    allDataForTable?: TAllDataForTable
}

const AcquiredEnergyEmissions:
    React.FC<AcquiredEnergyEmissionsProps> = ({
                                            rows,
                                            setRows,
                                                  allDataForTable
                                        }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const [currentDataObj, setCurrentDataObj] =
        useState<TAcquiredEnergyEmissions>({} as TAcquiredEnergyEmissions)

    useEffect(() => {
        console.log(allDataForTable!.resultAcquiredEmienergyEmissions)
        // setRows(allDataForTable!.resultAcquiredEmienergyEmissions)
    }, [])

    const handleChangeEnergyCons = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, energy_cons: value}));
    };

    const handleChangeCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, coef: value}));
    };

    return (
        <>
            <form className="flex flex-col w-full mb-[10px]">
                <div className="mr-auto flex flex-wrap">
                    <InputBorder placeholder={'Потраченная энергия'}
                                 onChange={handleChangeEnergyCons}/>
                    <InputBorder placeholder={'Региональный коэффициент'}
                                 onChange={handleChangeCoef}
                                 classStyle="w-[300px]"
                    />
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

export default AcquiredEnergyEmissions;