import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import Header from "../Navbar/Header";
import ButtonBorder from "../../ui/Buttons/ButtonBorder";
import {icons} from "../../../img";
import ButtonFill from "../../ui/Buttons/ButtonFill";
import {TAcquiredEnergyEmissions, TAllDataForTable, TAllFormulas} from "./types";
import {TAllOpt} from "./optTypes";
import StationaryFuelBurn from "./Formulas/StationaryFuelBurn";
import StationaryGasCoef from "./Formulas/StationaryGasCoef";
import FugitiveEmissions from "./Formulas/FugitiveEmissions";
import AcquiredEnergyEmissions from "./Formulas/AcquiredEnergyEmissions";
import TorchFuelCoef from "./Formulas/TorchFuelCoef";
import StationaryGasBurn from "./Formulas/StationaryGasBurn";
import {$api} from "../../../api/createApi";

type WindowLinkParams = {
    idEnterprise: string
}

type TFormulas = {
    id: number;
    name: string;
    component: React.ReactNode;
}

const CurrentEnterprise = () => {
    const {idEnterprise} = useParams<WindowLinkParams>()

    const [isArrowUp, setIsArrowUp] = useState<boolean>(false)
    const arrowSelectRef = useRef<HTMLImageElement>(null)

    const [rows, setRows] = useState<TAllFormulas[]>([])
    const [optValues, setOptValues] = useState<TAllOpt>({} as TAllOpt)
    const [activeFormula, setActiveFormula] = useState<number>(1)

    const [allDataForTable, setAllDataForTable] = useState<TAllDataForTable>({} as TAllDataForTable)

    useEffect(() => {
        $api.post<TAllDataForTable>(`/formulas/${idEnterprise}`)
            .then((response) => {
                setAllDataForTable(response.data)
            })
    }, [])

    const formulas: TFormulas[] = [
        {
            id: 1,
            name: "Приобретённая энергия",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows} allDataForTable={allDataForTable}/>,
        },
        {
            id: 2,
            name: "Фугитивные выбросы",
            component: <FugitiveEmissions rows={rows} setRows={setRows}/>
        },
        {
            id: 3,
            name: "Рассчёт коэффицента стационарного сжигания",
            component: <StationaryGasCoef rows={rows} setRows={setRows} setOptValues={setOptValues}/>
        },
        {
            id: 4,
            name: "Стационарное сжигание топлива",
            component: <StationaryGasBurn rows={rows} setRows={setRows} setOptValues={setOptValues}/>
        },
        {
            id: 5,
            name: "Стационарное сжигание газа",
            component: <StationaryFuelBurn rows={rows}
                                           setRows={setRows}
                                           setOptValues={setOptValues}
                                           allDataForTable={allDataForTable}/>
        },
        {
            id: 6,
            name: "Рассчёт коэффицента факельного сжигания",
            component: <TorchFuelCoef rows={rows} setRows={setRows}/>
        },
        {
            id: 7,
            name: "Факельное сжигание",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows}/>
        },
        {
            id: 8,
            name: "Выбросы от сжигания топлива в транспорте",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows}/>
        },
        {
            id: 9,
            name: "Очистка и сброс сточных вод",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows}/>
        },
        {
            id: 10,
            name: "Выбросы N2O сточных вод",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows}/>
        },
        {
            id: 11,
            name: "Сжигание отходов N2O",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows}/>
        },
        {
            id: 12,
            name: "Коэффициент многокомпонентных отходов",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows}/>
        },
        {
            id: 13,
            name: "Сжигание многокомпонентных отходов CO2",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows}/>
        },
        {
            id: 14,
            name: "Сжигание твёрдых отходов",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows}/>
        },
        {
            id: 15,
            name: "Сжигание жидких отходов",
            component: <AcquiredEnergyEmissions rows={rows} setRows={setRows}/>
        },
    ]

    const handleSelectFormula = () => {
        if (arrowSelectRef.current) {
            isArrowUp
                ? arrowSelectRef.current.style.transform = 'rotate(180deg)'
                : arrowSelectRef.current.style.transform = 'rotate(0deg)'
        }
        setIsArrowUp(prevState => !prevState)
    };

    const handleSetActiveFormula = (e: React.MouseEvent<HTMLOptionElement>, idFormula: number) => {
        e.preventDefault()
        setRows([]);
        setOptValues({} as TAllOpt)
        setActiveFormula(idFormula)
    };

    const handleSendData = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('~~~~~~~~~ | ROWS | ~~~~~~~~~ ')
        console.log(rows)
        console.log('~~~~~~~~~ | OPTIONALLY | ~~~~~~~~~ ')
        console.log(optValues)
        const firstString = rows[0] as TAcquiredEnergyEmissions
        // $api.post('/formulas/acquired_emienergy_emissions', {
        //     enterprise_id: idEnterprise,
        //     energy_cons: firstString.energy_cons,
        //     coef: firstString.coef
        // })
        //     .then(() => {
        //         console.log('SEND')
        //     })
    };

    const handleDownloadData = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(allDataForTable)
    };

    return (
        <div className="h-[100%] w-[100%] bg-enterprise text-mainWhite pb-[50px]">
            <Header/>
            <div className="px-[200px] mt-[50px]">
                <h1 className="text-5xl font-rubikMd">Название предприятия...</h1>
                <div className="relative">
                    <select name="choose" className="w-full border-solid border-[0.5px] border-mainBorder
                    flex py-[5px] px-[20px] text-2xl rounded-2xl flex items-center
                    hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] bg-transparent
                    focus:bg-enterprise my-[20px] appearance-none"
                            onClick={handleSelectFormula}
                    >
                        {formulas.map((formula) => (
                            <option value={formula.id}
                                    key={formula.id}
                                    onClick={(e) => handleSetActiveFormula(e, formula.id)}
                            >
                                {formula.name}
                            </option>
                        ))}
                    </select>
                    <img src={icons.arrowFormulaDown} alt="Arrow Down"
                         className="h-[15px] absolute top-[15px] right-[20px]
                     transition-transform ease-in-out"
                         ref={arrowSelectRef}
                    />
                </div>
                {formulas.map((formulas) => (
                    activeFormula === formulas.id
                        ? formulas.component
                        : null
                ))}
                <div className="flex flex-col items-end mt-[40px]">
                    <div className="flex">
                        <ButtonBorder onClick={handleSendData}
                                      classStyle="mr-[10px]"
                        >
                            Отправить
                        </ButtonBorder>
                        <ButtonFill onClick={handleDownloadData}>Скачать</ButtonFill>
                    </div>
                    <p className="text-[13px] mt-[5px]">Последнее обновление 30.09.2023 23:29</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentEnterprise;