'use client'

import getSupabase from '@/lib/supabase/client'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ColDef } from 'ag-grid-community'

import ProfileImageDefault from '@/assets/images/user-profile.jpg'
import Card from '@/components/Card'
const teacherTableName = 'spheriim_teacher'
import HeadTitles from '@/components/HeadTitles'
import getUserSession from '@/lib/getUserSessions'
import { useRouter } from 'next/navigation'
import loadingSpinner from '@/components/LoadingSpinner'

export default function Teachers() {
  const [quickFilterText, setQuickFilterText] = useState('')

  const [data, setData] = useState({})
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const auth = async () => {
      const {
        data: { session },
      } = await getUserSession()

      if (!session) {
        router.replace('/auth/login')
      } else {
        setIsLoading(false)
      }
    }
    auth()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getSupabase()
          .from(teacherTableName)
          .select(`*`)
        if (error) {
          setErrorMessage(error.message)
        } else {
          setData(data)
        }
      } catch (error: any) {
        setErrorMessage(error.message)
        console.log(errorMessage)
      }
    }

    console.log(data)

    fetchData()
  }, [errorMessage])

  const rowHeight = 90

  const centerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  }

  const redirectToTeacher = (id: string) => {
    router.push(`/teachers/${id}`)
  }

  const onRowClicked = useCallback((event: any) => {
    // Naviguez ou effectuez d'autres actions si nécessaire
    redirectToTeacher(event.data.id)
  }, [])

  const getRowStyle = useCallback(() => {
    return { cursor: 'pointer' }
  }, [])

  //Ag-Grid
  const columnDefs: ColDef[] = [
    {
      headerName: 'Professeurs',
      field: 'name',
      cellRenderer: (params: any) => (
        <div style={{ ...centerStyle, display: 'flex' }}>
          <Image
            width={64}
            height={64}
            src={
              params.data.picture ? params.data.picture : ProfileImageDefault
            }
            className="w-16 h-16 rounded-full mr-4"
            alt="Profile"
          />
          <span>
            {params.value} {params.data.firstname}
          </span>
        </div>
      ),
      cellStyle: centerStyle,
    },
    {
      headerName: 'Spécialité',
      field: 'speciality',
      cellRenderer: (params: any) => (
        <button
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
          }}
        >
          {params.value}
        </button>
      ),
      cellStyle: centerStyle,
    },
    {
      headerName: 'Mail',
      field: 'email',
      cellRenderer: (params: any) => (
        <a
          href={`mailto:${params.value}`}
          style={{
            color: '#F07D00',
            textDecoration: 'underline',
          }}
        >
          {params.value}
        </a>
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

  const onFilterTextBoxChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuickFilterText(event.target.value)
    },
    []
  )

  if (isLoading) {
    return loadingSpinner()
  }

  return (
    <div className="flex flex-col items-center justify-center bg-light-background">
      <HeadTitles title="Liste des professeurs" />
      <div className=" w-full h-full p-10">
        <Card className="w-full">
          <div className="ag-theme-alpine w-full p-8 ">
            <div className="example-header max-w-[300px]">
              <input
                type="text"
                id="filter-text-box"
                placeholder="Search..."
                onChange={onFilterTextBoxChanged}
                className="mb-3"
              />
            </div>
            <div style={{ height: '500px', width: '100%' }}>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={data ? Object.values(data) : []}
                defaultColDef={defaultColDef}
                quickFilterText={quickFilterText}
                rowHeight={rowHeight}
                pagination={true}
                paginationPageSize={5}
                onRowClicked={onRowClicked}
                getRowStyle={getRowStyle}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
