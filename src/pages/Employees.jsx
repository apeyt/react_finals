import {Box, TextField, Typography, Button, CircularProgress, Select, MenuItem, FormControl, InputLabel} from "@mui/material"
import {useState,useEffect, useMemo} from 'react'
import {DataGrid} from '@mui/x-data-grid'
import { DMLProfiles, retrieveProducts } from '../api/products'
import CustomModal from '../components/Modal'
import { AlignHorizontalCenter, FamilyRestroomRounded } from "@mui/icons-material"
import { toast } from "react-toastify"
import { Edit, Delete } from "@mui/icons-material"
import $ from 'jquery'

// {field: '', headerName: '' [, any css]}


function Profiles(){
    const [rows,setRows] = useState([])
    const [open, setOpen] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [selectedProfile, setSelectedProfile] = useState({})
    const [loading, setLoading] = useState(true);
    const columns = useMemo(()=> [
        // {
        //     field: 'id', // backend
        //     headerName: 'Item ID',  // output
        //     width: 50,
        //     fontWeight: 'bold'
        // },
        {
            field: 'name',
            headerName: 'Name',
            minWidth: 200,
        },
        {
            field: 'department',
            headerName: "Department",
            width: 150
        },
        {
            field: 'position',
            headerName: "Position",
            width: 150
        },
        {
            field: 'hireDate',
            headerName: "Hire Date",
            width: 100
        },
        {
            field: 'salary',
            headerName: "Salary",
            width: 100
        },
        {
            field: 'email',
            headerName: "Email Address",
            flex: 1,
        },
        {
            field: 'contact',
            headerName: "Contact Number",
            flex: 1,
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 100,
            sortable: false,
            renderCell: params =>(
                <Box
                    sx={{display: 'flex', flexDirextion: 'row', gap: 'none', justifyContent: 'center', mt: '7px', p: '1px'}}
                >
                    <Button 
                        sx={{flex: 1, m: '0px' , p: '1px'}} 
                        // variant="outlined" 
                        color="primary"
                        onClick={()=> openModal("edit", params.row)}>
                        <Edit />
                    </Button>
                    <Button 
                        sx={{flex: 1}} 
                        // variant="outlined" 
                        color="error"
                        onClick={()=>DeleteProduct(params.row)}>
                        <Delete />
                    </Button>
                </Box>
            )
        }
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

    useEffect(()=>{
        retrieve()
    },[])

    const openModal = (type, item) =>{
        if(type === 'edit'){
            setEditMode(true)
            setSelectedProfile(item)
        }
        setOpen(true)
    }

    const closeModal = () =>{
        setEditMode(false)
        setSelectedProfile({})
        setOpen(false)
    }
    

    const AddProduct = () =>{
        const productName = $("#ProductName").val()
        const department = $("#Department").val()
        const position = $("#Position").val()
        const hireDate = $("#HireDate").val()
        const salary = $("#Salary").val()
        const email = $("#Email").val()
        const contact = $("#Contact").val()

        DMLProfiles({name: productName, department: department, position: position, hireDate: hireDate, salary: salary, email: email, contact: contact}, "POST" )
        .then(response=>{
            if(response.ok){
                toast.success(`${productName}'s info ADDED!`)
                retrieve()
                closeModal()
            }else{
                toast.error(response.message ?? "Something went wrong...")
            }
        })
    }

    const UpdateProduct = () =>{
        const productName = $("#ProductName").val()
        const department = $("#Department").val()
        const position = $("#Position").val()
        const hireDate = $("#HireDate").val()
        const salary = $("#Salary").val()
        const email = $("#Email").val()
        const contact = $("#Contact").val()

        DMLProfiles({id: selectedProfile.id, name: productName, department: department, position: position, hireDate: hireDate, salary: salary, email: email, contact: contact}, "PATCH" )
        .then(response=>{
            if(response.ok){
                toast.success(`${productName}'s info UPDATED!`)
                retrieve()
                closeModal()
            }else{
                toast.error(response.message ?? "Something went wrong...")
            }
        })
    }


    const DeleteProduct = (item) =>{
            if(confirm(`Delete ${item.name}'s Information?`)){
                DMLProfiles({id: item.id}, "DELETE" )
            .then(()=>{
                    toast.success(`${item.name}'s info DELETED!`)
                    retrieve()
                    closeModal()
            })
        }
    }
    return (
        <Box sx={{flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', width: '100%', padding: 0, margin: 0}}>
            <Box m={2}>
                <Typography variant="h4" textAlign='center' padding='10px 20px 0px 5px'fontWeight="800" color='primary' gutterBottom> 
                    Employees
                </Typography>
            </Box>
            <Box sx={{flex: 1, p: 1}}>
                
                
                <CustomModal
                    buttonText="Create Employee Profile" 
                    open={open} 
                    handleOpen={() => openModal("add", null)} 
                    handleClose={() => closeModal()}
                >
                    <Typography 
                        variant="h5" 
                        bgcolor="#abadf8"
                        sx={{flex: 1, textAlign: 'center', color: 'black', p: 3, m: 0, width: '100%', fontWeight: "800"}}
                    >
                        {editMode ? `Update Info of ${selectedProfile.name}` : "Add an Employee"}
                    </Typography>
                    <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', width: '80%', gap: 2,}}>
                        <TextField
                            fullWidth
                            id="ProductName"
                            label="Employee Name"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedProfile.name ?? ''}
                        />
                        
                        <TextField
                            fullWidth
                            id="Department"
                            label="Department"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedProfile.department ?? ''}
                        />

                        <TextField
                            fullWidth
                            id="Position"
                            label="Position"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedProfile.position ?? ''}
                        />

                        <TextField
                            fullWidth
                            id="HireDate"
                            label="Hire Date"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedProfile.hireDate ?? ''}
                        />

                        <TextField
                            fullWidth
                            id="Salary"
                            label="Salary"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedProfile.salary ?? ''}
                        />

                        <TextField
                            fullWidth
                            id="Email"
                            label="Email Address"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedProfile.email ?? ''}
                        />

                        <TextField
                            fullWidth
                            id="Contact"
                            label="Contact Number"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedProfile.contact ?? ''}
                        />

                    </Box>

                    <Box sx={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                        <Button 
                            sx={{flex: 1, color: 'white', p: 2, fontSize: '12pt'}} 
                            variant="contained" 
                            color={editMode ? "primary" : "success"}
                            onClick={() => editMode ? UpdateProduct() : AddProduct()}
                        >
                            {editMode ? "Update" : "Add"}
                        </Button>
                    </Box>
                </CustomModal>

                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <CircularProgress />
                    </Box>
                ) : (

                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination:{
                            paginationModel:{
                                pageSize: 10
                            }
                        }
                    }}
                    pageSizeOptions={[10, 20, 30, 50, 100]}
                    disableRowSelectionOnClick
                    disableColumnResize
                    disableAutosize
                    sx={{
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: '#abadf8',
                            color: '#000',
                            fontWeight: '900',
                        },
                        '& .MuiDataGrid-cell': {
                            borderBottom: '1px solid #e0e0e0',
                        },
                    }}
                />
                )}
            </Box>
        </Box>
    )
}

export default Profiles