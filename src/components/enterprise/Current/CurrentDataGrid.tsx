import React from 'react';
import {DataGrid, GridColDef, GridRowSelectionModel} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {TAllFormulas} from "./types";

type DataGridProps = {
    rows: TAllFormulas[]
    setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>;
    columns: GridColDef[];
}

const CurrentDataGrid: React.FC<DataGridProps> = ({rows, setSelectedRows, columns}) => {
    return (
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
                        color: '#1a1a1c',
                    },
                    '.MuiDataGrid-overlay': {
                        color: '#1a1a1c',
                        backgroundColor: '#ffffff'
                    },
                    '.MuiDataGrid-cell.MuiDataGrid-cell--editing': {
                        backgroundColor: '#ffffff'
                    },
                    '.MuiInputBase-input': {
                        color: '#1a1a1c',
                    },
                    '.MuiDataGrid-columnHeaderTitle': {
                        color: '#1a1a1c',
                    },
                    '.MuiCheckbox-root': {
                        color: '#1a1a1c'
                    },
                    '.MuiDataGrid-columnHeaders': {
                        borderColor: 'rgb(109,109,109,0.4)'
                    },
                    '.MuiDataGrid-footerContainer': {
                        borderColor: 'rgb(109,109,109,0.4)',
                    },
                    '.MuiToolbar-root': {
                        color: '#1a1a1c'
                    },
                    '.MuiSvgIcon-root': {
                        color: '#1a1a1c'
                    },
                    '.MuiIconButton-root:not(.Mui-disabled) .MuiSvgIcon-root': {
                        color: '#1a1a1c'
                    },
                    '.MuiDataGrid-selectedRowCount': {
                        color: '#1a1a1c'
                    },
                    ".MuiCheckbox-root.Mui-checked .MuiSvgIcon-root": {
                        color: '#1a1a1c'
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
                    footerRowSelected: (count: number) =>
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
                    toolbarFiltersTooltipActive: (count: number) =>
                        count !== 1 ? `${count} активных фильтров` : '1 активный фильтр',
                    toolbarExport: 'Экспорт',
                    toolbarExportLabel: 'Экспорт',
                    toolbarExportCSV: 'Скачать как CSV',
                    footerTotalRows: 'Всего строк:',
                    noRowsLabel: 'Параметры не заполнены',
                    MuiTablePagination: {
                        labelDisplayedRows: ({from, to, count}: {from: number, to: number, count: number}) =>
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
                onRowSelectionModelChange={(newModel: GridRowSelectionModel) => {
                    setSelectedRows([])
                    newModel.forEach(el => setSelectedRows(prevState => [...prevState, el as number]))
                }}
            />
        </Box>
    );
};

export default CurrentDataGrid;