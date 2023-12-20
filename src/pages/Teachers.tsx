import React, { useCallback, useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ColDef } from 'ag-grid-community'
import { teachers_Data } from '../data/teachers.data'
import ListingHeader from '../components/ListingHeader'

const Teachers: React.FC = () => {
  //State
  const [quickFilterText, setQuickFilterText] = useState('')

  const rowHeight = 100

  const centerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  }

  //Ag-Grid
  const columnDefs: ColDef[] = [
    {
      headerName: "Professeur",
      field: "name",
      cellRenderer: (params: any) => (
        <div style={{ ...centerStyle, display: 'flex' }}>
          <img src={params.data.profilePic} className="w-12 h-12 rounded-full mr-3" alt="Profile" />
          <span>{params.value}</span>
        </div>
      ),
      cellStyle: centerStyle,
    },
    {
      headerName: "Profession",
      field: "profession",
      cellStyle: centerStyle,
    },
    {
      headerName: "Mail",
      field: "email",
      cellStyle: centerStyle,
    },
    {
      headerName: "Année de début",
      field: "startYear",
      cellStyle: centerStyle,
    },
  ]

  //Default ColDef
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: false,
      enableValue: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    }
  }, [])

  const onFilterTextBoxChanged = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuickFilterText(event.target.value)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <ListingHeader title="Liste des professeurs" />
      <div className="ag-theme-alpine w-full p-8">
        <div className="example-header max-w-[300px]">
          <input
            type="text"
            id="filter-text-box"
            placeholder="Search..."
            onChange={onFilterTextBoxChanged}
            className="mb-3"
          />
        </div>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={teachers_Data}
          defaultColDef={defaultColDef}
          quickFilterText={quickFilterText}
          rowHeight={rowHeight}
          pagination={true}
          paginationPageSize={5}
          domLayout='autoHeight'
        />
      </div>
    </div>
  )
}


export default Teachers

