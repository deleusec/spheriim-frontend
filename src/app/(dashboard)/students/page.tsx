"use client";

import HeadTitles from "@/components/HeadTitles"
import getSupabase from "@/database/supabase";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ColDef } from 'ag-grid-community'

import ProfileImageDefault from '@/assets/images/user-profile.jpg';
const studentTableName = 'spheriim_student';

export default function Students() {
    const [quickFilterText, setQuickFilterText] = useState('')

    const [data, setData] = useState({});
    const [errorMessage, setErrorMessage] = useState<string>(''); 

    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data, error } = await getSupabase()
                    .from(studentTableName)
                    .select(
                        `*, class:class_id(*)`
                    );
                if (error) {
                    setErrorMessage(error.message);
                } else {
                    setData(data);
                }
            } catch (error: any) {
                setErrorMessage(error.message);
                console.log(errorMessage);

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
    }

    const redirectToStudent = (id: string, studentData: any) => {

    };

    const onRowClicked = useCallback(
        (event: any) => {
            // Naviguez ou effectuez d'autres actions si nécessaire
            redirectToStudent(event.data.id, event.data);
        },
        []
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
                    <Image src={params.data.picture ? params.data.picture : ProfileImageDefault} className="w-16 h-16 rounded-full mr-4" alt="Profile" />
                    <span>{params.value} {params.data.firstname}</span>
                </div>
            ),
            cellStyle: centerStyle,
        },
        {
            headerName: "Classe",
            field: "class.name",
            cellRenderer: (params: any) => (
                <button onClick={() => redirectToClass(params.data.class_id)}
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
        <div className="flex flex-col items-center justify-center">
            <HeadTitles title="Liste des étudiants" />

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
                    rowData={data ? Object.values(data) : []}
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