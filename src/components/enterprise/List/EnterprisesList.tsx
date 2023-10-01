import React from 'react';
import Header from "../Navbar/Header";
import ButtonBorder from "../../ui/Buttons/ButtonBorder";
import {icons} from '../../../img/index';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'name',
        headerName: 'Название',
        width: 200,
        editable: true,
    },
    {
        field: 'cord',
        headerName: 'Географическое положение',
        flex: 1,
        editable: true,
    },
];

const rows = [
    {id: 1, name: 'Предприятие №1', cord: '23.231321, -23.232213'},
    {id: 2, name: 'Предприятие №2', cord: '23.231321, -23.232213'},
    {id: 3, name: 'Предприятие №3', cord: '23.231321, -23.232213'},
    {id: 4, name: 'Предприятие №4', cord: '23.231321, -23.232213'},
    {id: 5, name: 'Предприятие №5', cord: '23.231321, -23.232213'},
    {id: 6, name: 'Предприятие №6', cord: '23.231321, -23.232213'},
    {id: 7, name: 'Предприятие №7', cord: '23.231321, -23.232213'},
    {id: 8, name: 'Предприятие №8', cord: '23.231321, -23.232213'},
    {id: 9, name: 'Предприятие №9', cord: '23.231321, -23.232213'},
];

const localizedTextsMap = {
    columnMenuUnsort: "Привет",
    columnMenuSortAsc: "Привет",
    columnMenuSortDesc: "Привет",
    columnMenuFilter: "Привет",
    columnMenuHideColumn: "Привет",
    columnMenuShowColumns: "Привет"
};

const EnterprisesList: React.FC = () => {

    return (
        <div className="h-screen w-screen bg-enterprise text-mainWhite">
            <Header/>
            <div className="px-[200px] mt-[70px]">
                <h1 className="text-5xl font-rubikMd">Список предприятий</h1>
                <form className="mt-[20px] flex mb-[20px]">
                    <ButtonBorder icon={icons.open} classStyle="mr-[20px]">
                        Открыть
                    </ButtonBorder>
                    <ButtonBorder icon={icons.deleteIco}>
                        Удалить
                    </ButtonBorder>
                    <ButtonBorder icon={icons.create} classStyle="ml-auto">
                        Создать
                    </ButtonBorder>
                </form>
                <Box sx={{
                    height: 370,
                    width: '100%',
                    '.MuiDataGrid-root': {
                        borderColor: 'rgb(109,109,109,0.4)'
                    }
                }}>
                    <DataGrid
                        sx={{
                            '.MuiDataGrid-cell': {
                                borderColor: 'none',
                                borderWidth: 'none',
                                borderBottomColor: 'rgb(109,109,109,0.4)',
                                borderBottomWidth: '0.5px',
                                color: '#E9E9EA',
                            },
                            '.MuiDataGrid-cell.MuiDataGrid-cell--editing': {
                                backgroundColor: '#101418'
                            },
                            '.MuiInputBase-input': {
                                color: '#E9E9EA',
                            },
                            '.MuiDataGrid-columnHeaderTitle': {
                                color: '#E9E9EA',
                            },
                            '.MuiCheckbox-root': {
                                color: '#E9E9EA'
                            },
                            '.MuiDataGrid-columnHeaders': {
                                borderColor: 'rgb(109,109,109,0.4)'
                            },
                            '.MuiDataGrid-footerContainer': {
                                borderColor: 'rgb(109,109,109,0.4)',
                            },
                            '.MuiToolbar-root': {
                                color: '#E9E9EA'
                            },
                            '.MuiSvgIcon-root': {
                                color: '#3B3B3B'
                            },
                            '.MuiIconButton-root:not(.Mui-disabled) .MuiSvgIcon-root': {
                                color: '#E9E9EA'
                            },
                            '.MuiDataGrid-selectedRowCount': {
                                color: '#E9E9EA'
                            },
                            ".MuiCheckbox-root.Mui-checked .MuiSvgIcon-root": {
                                color: '#E9E9EA'
                            }
                        }}
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        localeText={{
                            footerRowSelected: (count) =>
                                count !== 1
                                    ? `${count.toLocaleString()} строк выбрано`
                                    : '1 строка выбрана',
                            toolbarDensity: 'Плотность',
                            columnMenuUnsort: "Исходное",
                            columnMenuSortAsc: "По возрастанию",
                            columnMenuSortDesc: "По убыванию",
                            columnMenuFilter: "Фильтры",
                            columnMenuHideColumn: "Скрыть",
                            columnMenuShowColumns: "Показать",
                            columnMenuManageColumns: 'Панель инструментов',
                            toolbarDensityLabel: 'Плотность',
                            toolbarDensityCompact: 'Компактно',
                            toolbarDensityStandard: 'Стандарт',
                            toolbarDensityComfortable: 'Комфортно',
                            toolbarFilters: 'Фильтры',
                            toolbarFiltersLabel: 'Показать фильтры',
                            toolbarFiltersTooltipHide: 'Скрыть фильтры',
                            toolbarFiltersTooltipShow: 'Показать фильтры',
                            toolbarFiltersTooltipActive: (count) =>
                                count !== 1 ? `${count} активных фильтров` : '1 активный фильтр',
                            toolbarExport: 'Экспорт',
                            toolbarExportLabel: 'Экспорт',
                            toolbarExportCSV: 'Скачать как CSV',
                            footerTotalRows: 'Всего строк:',
                            MuiTablePagination: {
                                labelDisplayedRows: ({from, to, count}) =>
                                    `${from}-${to} из ${count}`,
                            },
                        }}
                        componentsProps={{
                            pagination: {
                                labelRowsPerPage: 'Показывать первые:'
                            }
                        }}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
        </div>
    );
};

export default EnterprisesList;