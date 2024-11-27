import { Box, Typography, CircularProgress } from "@mui/material";
import { useState, useEffect, useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { retrieveProducts } from '../api/products';

function Roster() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = useMemo(() => [
        {
            field: 'department',
            headerName: "Department",
            width: 250 
        },
        {
            field: 'position',
            headerName: "Position",
            width: 250 
        },
        {
            field: 'name', 
            headerName: 'Employee Name', 
            width: 400 
        },
    ])

    const retrieve = async () => {
        setLoading(true);
        try {
            const res = await retrieveProducts();
            setRows(res.data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        retrieve();
    }, []);

    return (
        <Box sx={{flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', width: '100%', padding: 0, margin: 0}}>
            <Box m={2}>
                <Typography variant="h4" textAlign='center' padding='10px 20px 0px 5px'fontWeight="800" color='primary' gutterBottom> 
                    Employee Roster
                </Typography>
            </Box>
            <Box sx={{ flex: 1, p: 2}}>
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <CircularProgress />
                    </Box>
                ) : (
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10
                                }
                            }
                        }}
                        pageSizeOptions={[10, 20, 30, 50, 100]}
                        disableRowSelectionOnClick
                        autoHeight
                        sx={{
                            '& .MuiDataGrid-columnHeader': {
                                backgroundColor: '#abadf8',
                                color: '#000',
                                fontWeight: '900',
                            },
                            '& .MuiDataGrid-cell': {
                                borderBottom: '1px solid #e0e0e0',
                            }
                        }}
                    />
                )}
            </Box>
        </Box>
    );
}

export default Roster;