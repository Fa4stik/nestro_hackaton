import React, {useEffect, useState} from 'react';
import Header from "../Navbar/Header";
import ButtonBorder from "../../ui/Buttons/ButtonBorder";
import {icons} from '../../../img/index';
import InputBorder from "../../ui/Inputs/InputBorder";
import ButtonFill from "../../ui/Buttons/ButtonFill";
import EntrListDataGrid from './EntrListDataGrid'
import {TEnterprise, TEnterprises} from "./types";
import {useNavigate} from "react-router-dom";
import {$api} from "../../../api/createApi";

const EnterprisesList: React.FC = () => {
    const [action, setAction] = useState<string>('create')

    const [rows, setRows] = useState<TEnterprise[]>([])
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const [nameEntr, setNameEntr] = useState<string>('')
    const [cordEntr, setCordEntr] = useState<string>('')

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await $api.get<TEnterprises>('/enterprise')
            setRows(response.data.enterprises)
        })()
    }, [])

    const handleSetFormEntr = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAction('add');
    };

    const handleChangeNameEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNameEntr(e.target.value);
    };

    const handleChangeCord = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCordEntr(e.target.value)
    };

    const handleCreateEntr = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRows(prevState => [...prevState, {
            id: prevState.length > 0 ? prevState.length + 1 : 1,
            parent: 1,
            Name: nameEntr,
            location: cordEntr
        }])
    };

    const handleCancelCreateEntr = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setAction('create')
    };

    const handleDeleteEntr = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setRows(prevState =>
            prevState?.filter(row =>
                !selectedRows.includes(row.id)
            )
        );
    };

    const handleOpenEntr = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(`/enterprise/${selectedRows[0]}`)
    };

    return (
        <div className="h-screen w-screen bg-enterprise text-mainWhite">
            <Header/>
            <div className="px-[200px] mt-[50px]">
                <h1 className="text-5xl font-rubikMd">Список предприятий</h1>
                {action === 'create' ?
                    <form className="my-[20px] flex">
                        <ButtonBorder icon={icons.open}
                                      classStyle="mr-[20px]"
                                      onClick={handleOpenEntr}
                        >
                            Открыть
                        </ButtonBorder>
                        <ButtonBorder icon={icons.deleteIco} onClick={handleDeleteEntr}>
                            Удалить
                        </ButtonBorder>
                        <ButtonBorder icon={icons.create}
                                      classStyle="ml-auto"
                                      onClick={handleSetFormEntr}
                        >
                            Создать
                        </ButtonBorder>
                    </form>
                    :
                    <form className="my-[20px] flex">
                        <div className="flex mr-auto">
                            <InputBorder placeholder={'Название...'} onChange={handleChangeNameEnter}/>
                            <InputBorder placeholder={'Положение...'} onChange={handleChangeCord}/>
                        </div>
                        <div className="flex ml-auto">
                            <ButtonBorder classStyle="mr-[20px]"
                                          onClick={handleCancelCreateEntr}
                            >
                                Отмена
                            </ButtonBorder>
                            <ButtonFill onClick={handleCreateEntr}>
                                Создать
                            </ButtonFill>
                        </div>
                    </form>
                }
                <EntrListDataGrid rows={rows}
                                  setSelectedRows={setSelectedRows}
                />
            </div>
        </div>
    );
};

export default EnterprisesList;