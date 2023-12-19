import React, { useCallback, useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ColDef } from 'ag-grid-community'
import {students_Data} from '../data/students.data'

const Students: React.FC = () => {
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
      headerName: "Étudiant",
      field: "name",
      cellRenderer: (params: any) => (
        <div style={{ ...centerStyle, display: 'flex' }}>
          <img src={params.data.profilePic} className="w-20 h-20 rounded-full mr-3" alt="Profile" />
          <span>{params.value}</span>
        </div>
      ),
      cellStyle: centerStyle,
    },
    { 
      headerName: "Classe",
      field: "class", 
      cellStyle: centerStyle,
    },
    { headerName: "Mail",
      field: "email",
      cellStyle: centerStyle,
    },
    { headerName: "Année de début",
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
    <div className="flex justify-center">
      <div className="ag-theme-alpine w-11/12 my-4">
      <h1 className="text-center text-3xl font-bold mb-4">Liste des étudients: <span style={{ color: '#F07D00' }}>IIM A4 FullStack</span></h1>
        <div className="example-header">
          <input
            type="text"
            id="filter-text-box"
            placeholder="Search..."
            onChange={onFilterTextBoxChanged}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 mb-3 rounded-lg text-sm focus:outline-none"
          />
        </div>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={students_Data}
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
  

export default Students

