import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'date', headerName: 'Date Joined', width: 150 },
    { field: 'refno', headerName: 'BISH! code', width: 150 },
    { field: 'first_name', headerName: 'First Name', width: 150, },
    { field: 'last_name', headerName: 'Surname', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'phone', headerName: 'Mobile', width: 150 },
];


export default function DataTable({ userData }) {

    return (
        <div style={{ height: '80%', width: '100%' }}>
            <DataGrid
                rows={userData.length > 0 && userData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ overflow: 'clip' }}
            />
        </div>
    );
}
