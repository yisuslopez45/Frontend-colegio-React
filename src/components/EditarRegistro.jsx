
import { Button, Grid, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material'

// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import EditarRegistroDialog from './Dialog/EditarRegistroDialog';

//icons
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import axiosClient from '../config/AxiosClient';
import { useSelector } from 'react-redux';
import EliminarRegistroDialog from './Dialog/EliminarRegistroDialog';

const table = {

    '& .MuiDataGrid-columnHeaderTitleContainer ': {
        backgroundColor: "#77BFA3",
        justifyContent: "center"
    },

    '&  .MuiDataGrid-columnSeparator': {
        backgroundColor: "#77BFA3"
    },

    '& .MuiDataGrid-menuIcon': {
        backgroundColor: "#77BFA3"
    },

    '& .MuiDataGrid-columnHeader': {
        padding: "0px"
    },

    '& .MuiDataGrid-cell ': {
        justifyContent: "center"
    }

}

const EditarRegistro = () => {

    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [rowsData, setRows] = useState([])
    const [filas, setFilas] = useState([])
    const { id_usuario, token } = useSelector(state => state.login)
    const [bandera, setBandera] = useState(0)

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))


    const queryGet = async (url, funcion) => {

        try {
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const { data } = await axiosClient.get(url);
            funcion(data.data)

        } catch (err) {
            console.log(err)
        }

    }

    console.log(bandera)


    useEffect(() => {
        if (id_usuario !== undefined) {
            queryGet(`/verRegistros/${id_usuario}`, setRows)
        }
    }, [id_usuario, bandera])


    const columns = [

        {
            field: 'asignatura',
            headerName: 'Asignatura',
            minWidth: 150,
            flex: 1
        },

        {
            field: "horas_dictadas",
            headerName: 'Horas Dictadas',
            minWidth: 150,
            flex: 1

        },

        {
            field: "tema_dictado",
            headerName: 'Tema dictado',
            minWidth: 150,
            flex: 1

        },
        {
            field: "num_estudiantes",
            headerName: 'Numero de estudiantes',
            minWidth: 150,
            flex: 1


        },


        {
            field: 'observacion',
            headerName: 'Observaciónes',
            minWidth: 150,
            flex: 1
        },


        {
            field: 'actions',
            headerName: 'Acciones',
            minWidth: 150,
            flex: 1,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            filterable: false,
            renderCell: (params) => (

                <>
                    <strong>

                        <Tooltip title='Editar Registro' arrow>
                            <Button
                                onClick={() => {
                                    setFilas(params.row)
                                    setModal(true)
                                }
                                }
                                style={{ backgroundColor: "#ffb703", color: '#FFFFFF' }}
                            >
                                <ChangeCircleIcon />

                            </Button>

                        </Tooltip>
                    </strong>

                    <strong>

                        <Tooltip title='Eliminar Registro' arrow>
                            <Button
                                onClick={() => {
                                    setFilas(params.row)
                                    setModal2(true)
                                }
                                }
                                style={{ backgroundColor: "#d62828", color: '#FFFFFF', margin: "5px" }}
                            >
                                <DeleteIcon />

                            </Button>

                        </Tooltip>
                    </strong>
                </>

            )
        },



    ];

    const rows = [
        { nombreDocente: 'Snow', cedula: '122', asignatura: 35, horastrabajadas: 45, horasfaltantes: 5, sueldo: 58 }
    ];



    return (

        <>

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={10} paddingBottom={15} >

                <Grid item width={"100%"}  >

                    <Grid container direction="column" alignItems="center" justifyContent='center' marginTop={5} paddingLeft={isMatch ? 5 : 25} paddingRight={isMatch ? 5 : 25}>

                        <Grid item lg={12} padding={1} textAlign="center" paddingBottom={5}   >
                            <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                Programación Semestre
                            </Typography>
                        </Grid>



                        <Grid item width={"100%"} padding={1}  >

                            {
                                rowsData.length !== 0 ? (

                                        <DataGrid
                                            autoHeight
                                            rows={rowsData}
                                            columns={columns}
                                            sx={table}
                                            style={{ fontSize: "15px", fontWeight: "bold", height: 350 }}
                                            pageSize={5}
                                            getRowId={(row) => row.id_registro}
    
                                        />

                                ) : (

                             <Grid container xs={12} padding={1} justifyContent="center" alignItems="center" style={{ backgroundColor: "#77BFA3", height: "200px" }}  >

                                <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                    No tiene registros ingresados
                                </Typography>

                             </Grid>
                            )
                            }




                        </Grid>

                      


                    </Grid>



                </Grid>

            </Grid>
                        
            
            {
                modal && (
                    <EditarRegistroDialog filas={filas} setFilas={setFilas}  setBandera={setBandera} bandera={bandera} modal={modal} setModal={setModal}></EditarRegistroDialog>
                )
            }

            {
                modal2 && (
                    <EliminarRegistroDialog filas={filas} setFilas={setFilas}  setBandera={setBandera} bandera={bandera} modal={modal2} setModal={setModal2}></EliminarRegistroDialog>
                )
            }


            <Footer></Footer>


        </>

    )
}

export default EditarRegistro