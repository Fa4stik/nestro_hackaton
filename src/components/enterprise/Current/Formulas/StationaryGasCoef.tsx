import React, {useState} from 'react';
import InputBorder from "../../../ui/Inputs/InputBorder";
import HeaderGrid from "../HeaderGrid";
import CurrentDataGrid from "../CurrentDataGrid";
import {GridColDef} from "@mui/x-data-grid";
import {TAllFormulas, TStationaryGasCoef} from "../types";
import {TAllOpt} from "../optTypes";

const columns: GridColDef[] = [
    {field: 'id', headerName: '№', width: 90},
    {
        field: 'chem_content',
        headerName: 'Содержание компонентов',
        width: 300,
        editable: true,
    },
    {
        field: 'chem_formula',
        headerName: 'Содержание компонентов',
        flex: 1,
        editable: true,
    },
];

type StationaryGasCoefProps = {
    rows: TAllFormulas[]
    setRows: React.Dispatch<React.SetStateAction<TAllFormulas[]>>;
    setOptValues: React.Dispatch<React.SetStateAction<TAllOpt>>
}

const StationaryGasCoef: React.FC<StationaryGasCoefProps> = ({
            rows,
            setRows,
            setOptValues
        }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([])

    const [currentDataObj, setCurrentDataObj] = useState<TStationaryGasCoef>({} as TStationaryGasCoef)

    const handleChangeChemContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setCurrentDataObj(prevState =>
            ({...prevState, chem_content: value}));
    };

    const handleChangeСhemFormula = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentDataObj(prevState =>
            ({...prevState, chem_formula: e.target.value}));
    };

    const handleChangeIdMixture = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value)
        setOptValues(prevState =>
            ({...prevState, idMixed: value}));
    };

    const handleChangeNameMixture = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptValues(prevState =>
            ({...prevState, nameMixed: e.target.value}));
    };

    return (
        <>
            <form className="flex flex-col w-full mb-[10px]">
                <div className="mr-auto flex flex-wrap">
                    <InputBorder placeholder={'Объёмная доля комп.'}
                                 onChange={handleChangeChemContent}
                                 classStyle="w-[300px]"
                    />
                    <InputBorder placeholder={'Химическая формула'}
                                 onChange={handleChangeСhemFormula}
                                 classStyle="w-[300px]"
                    />
                </div>
                <HeaderGrid setRows={setRows} selectedRows={selectedRows} params={{...currentDataObj, id: 0}}/>
            </form>
            <CurrentDataGrid setSelectedRows={setSelectedRows} rows={rows} columns={columns}/>
            <div className="flex flex-wrap mt-[10px]">
                <InputBorder placeholder={'Номер смеси'}
                             onChange={handleChangeIdMixture}/>
                <InputBorder placeholder={'Название источника выбросов'}
                             onChange={handleChangeNameMixture}/>
            </div>
        </>
    );
};

export default StationaryGasCoef;