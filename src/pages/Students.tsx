import React, { useCallback, useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ColDef } from 'ag-grid-community'
import {students_Data} from '../data/students.data'
import { useNavigate } from 'react-router-dom'


const Students: React.FC = () => {
  //State
  const [quickFilterText, setQuickFilterText] = useState('')
  const navigate = useNavigate()

  const rowHeight = 100

  const centerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%', 
  }

  const redirectToClass = (id: string) => {
    navigate(`/classes/${id}`)
  }

  const onRowClicked = useCallback((event: any) => 
    navigate(`/students/${event.data.id}`), 
    [navigate]
  )

  const getRowStyle = useCallback(() => {
    return { cursor: 'pointer' }
  }, []);
  
  //Ag-Grid
  const columnDefs: ColDef[] = [
    {
      headerName: "Étudiant",
      field: "name",
      cellRenderer: (params: any) => (
        <div style={{ ...centerStyle, display: 'flex' }}>
          <img src={params.data.profilePic} className="w-16 h-16 rounded-full mr-4" alt="Profile" />
          <span>{params.value}</span>
        </div>
      ),
      cellStyle: centerStyle,
    },
    {
      headerName: "Classe",
      field: "class",
      cellRenderer: (params: any) => (
        <button  onClick={() => redirectToClass(params.data.id)}
          style={{
            backgroundColor: '#F07D00',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '4px 12px', 
            fontSize: '13px',
            lineHeight: '1', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            fontWeight: 'bold',
            height: '24px', 
          }}>
          {params.value}
        </button>
      ),
      cellStyle: centerStyle,
    },
    {
      headerName: "Mail",
      field: "email",
      cellRenderer: (params: any) => (
        <a href={`mailto:${params.value}`} style={{
          color: '#F07D00', 
          textDecoration: 'underline',
        }}>
          {params.value}
        </a>
      ),
      cellStyle: centerStyle, 
    },
    {
      headerName: "Année de début",
      field: "startYear",
      cellRenderer: (params: any) => (
        <span style={{ fontWeight: 'bold' }}>{params.value}</span>
      ),
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
          rowData={students_Data}
          defaultColDef={defaultColDef}
          quickFilterText={quickFilterText}
          rowHeight={rowHeight}
          pagination={true}
          paginationPageSize={5}
          onRowClicked={onRowClicked}
          getRowStyle={getRowStyle}
          domLayout='autoHeight'
        />
      </div>
    </div>
  )
}
  

export default Students

