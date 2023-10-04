import React, {useState} from 'react';
import InputBorder from "../../../ui/Inputs/InputBorder";
import CurrentDataGrid from "../CurrentDataGrid";
import HeaderGrid from "../HeaderGrid";
import {GridColDef} from "@mui/x-data-grid";
import {TAllFormulas} from "../types";
import {TAllOpt} from "../optTypes";

const columns: GridColDef[] = [
    {field: 'id', headerName: '№', width: 90},
    {
        field: 'organicCoef',
        headerName: 'Органические вещества',
        width: 200,
        editable: true,
    },
    {
        field: 'volume',
        headerName: 'Объем сточных вод',
        width: 200,
        editable: true,
    },
    {
        field: 'corrCoef',
        headerName: 'Поправочный коэффициент',
        width: 200,
        editable: true,
    },
    {
        field: 'organicWaste',
        headerName: 'Органический отход',
        flex: 1,
        editable: true,
    },
];

type WasteWaterCh4Props = {
    rows: TAllFormulas[]
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>;
    setOptValues?: React.Dispatch<React.SetStateAction<TAllOpt>>;
}

const WasteWaterCh4:
    React.FC<WasteWaterCh4Props> = ({
                                     rows,
                                     setRows,
                                     setOptValues
                                 }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const [currentDataObj, setCurrentDataObj] =
        useState({})

    const handleChangeOrganicCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, organicCoef: value}));
    };

    const handleChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, volume: value}));
    };

    const handleChangeCorrCoef = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, corrCoef: value}));
    };

    const handleChangeOrganicWaste = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, organicWaste: value}));
    };

    const handleChangeB0 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues!(prevState =>
            ({...prevState, B0: value}))
    };

    return (
        <>
            <form className="flex flex-col w-full mb-[10px]">
                <div className="mr-auto flex flex-wrap">
                    <InputBorder placeholder={'Органические вещества'}
                                 onChange={handleChangeOrganicCoef}/>
                    <InputBorder placeholder={'Объем сточных вод'}
                                 onChange={handleChangeVolume}/>
                    <InputBorder placeholder={'Поправочный коэффициент'}
                                 onChange={handleChangeCorrCoef}/>
                    <InputBorder placeholder={'Органический отход'}
                                 onChange={handleChangeOrganicWaste}/>
                </div>
                {/*<HeaderGrid setRows={setRows}*/}
                {/*            selectedRows={selectedRows}*/}
                {/*            params={{...currentDataObj, id: 0}}/>*/}
            </form>
            <CurrentDataGrid setSelectedRows={setSelectedRows}
                             rows={rows} columns={columns}/>
            <div className="flex flex-wrap mt-[10px]">
                <InputBorder placeholder={'Способность CH4'}
                             onChange={handleChangeB0}/>
            </div>
        </>
    );
};

export default WasteWaterCh4;