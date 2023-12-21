import React, {useCallback, useEffect, useMemo, useState} from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ColDef } from 'ag-grid-community'
import { useNavigate } from 'react-router-dom'
import HeadTitles from '../components/HeadTitles'

import { createClient } from '@supabase/supabase-js';

import ProfileImageDefault from '../assets/images/user-profile.jpg';

const supabaseUrl = 'https://lkhayewnehhxhqkckehs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraGF5ZXduZWhoeGhxa2NrZWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4OTc5NTMsImV4cCI6MjAxODQ3Mzk1M30.fKfRK_Dmx4KZ39za2coUrQGBbLJkrCbK_YIKEBbEQ6U';
const studentTableName = 'spheriim_student';
const classTableName = 'spheriim_class';
const supabase = createClient(supabaseUrl, supabaseKey);

const Students: React.FC = () => {
  //State
  const [quickFilterText, setQuickFilterText] = useState('')
  const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from(studentTableName)
                    .select(
                        `*, class:class_id(*)`
                    );
                if (error) {
                    setError(error.message);
                } else {
                    setData(data);
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

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

  const redirectToStudent = (id: string, studentData: any) => {
     navigate(`/students/${id}`, { state: { studentData } });
  };

  const onRowClicked = useCallback(
     (event: any) => {
         // Naviguez ou effectuez d'autres actions si nécessaire
         redirectToStudent(event.data.id, event.data);
     },
     [navigate]
  );

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
          <img src={ params.data.picture ? params.data.picture : ProfileImageDefault } className="w-16 h-16 rounded-full mr-4" alt="Profile" />
          <span>{params.value} {params.data.firstname}</span>
        </div>
      ),
      cellStyle: centerStyle,
    },
    {
      headerName: "Classe",
      field: "class.name",
      cellRenderer: (params: any) => (
        <button  onClick={() => redirectToClass(params.data.class_id)}
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
      field: "start_year",
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
    <div className="flex flex-col items- justify-center">
    <HeadTitles title="Liste des étudiants" subtitle='IIM A4 FullStack' />
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
          rowData={data}
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

