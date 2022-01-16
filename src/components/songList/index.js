import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Menu from '../addPlaylist';


const SongList = ({ search, songs, addPlaylistClicked }) => {
    const [gridApi, setGridApi] = useState()
    useEffect(() => {
        gridApi && gridApi.api.setQuickFilter(search)
    }, [search])

    const columns = [
        { headerName: "Title", field: "title" },
        { headerName: "Artist", field: "artists" },
        { headerName: "Album", field: "album" },
        {
            headerName: "Action", field: "_id",
            cellRendererFramework: (params) => <button
                onClick={() => addPlaylistClicked(params.value)}>
                Add to playlist</button>
        }
    ]
    const defaultColDefs = {
        sortable: true,
        flex: 1,
        minWidth: 150,
        filter: true,
    }
    const onGridReady = (params) => {
        setGridApi(params)
    }

    return (
        <div className="ag-theme-alpine" style={{ height: 400 }}>
            <AgGridReact
                columnDefs={columns}
                rowData={songs}
                defaultColDef={defaultColDefs}
                onGridReady={onGridReady}
                rowSelection={'single'}
            />
            <div>

            </div>
        </div>
    );
}

export default SongList;