
import { Alert, Button, Grid, Tooltip, Typography } from '@mui/material'

// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import imagenSend from '../img/Checklist_Two Color.svg'
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
    const { id_usuario } = useSelector(state => state.login)
    const [notificacion, setNotificacion] = useState(0)
    const [notificacion2, setNotificacion2] = useState(0)
    const [bandera, setBandera] = useState(0)


    const queryGet = async (url, funcion) => {

        try {
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
            flex: 1
        },

        {
            field: "horas_dictadas",
            headerName: 'Horas Dictadas',
            flex: 1

        },

        {
            field: "tema_dictado",
            headerName: 'Tema dictado',
            flex: 1

        },
        {
            field: "num_estudiantes",
            headerName: 'Numero de estudiantes',
            flex: 1


        },


        {
            field: 'observacion',
            headerName: 'Observaciónes',
            flex: 1
        },


        {
            field: 'actions',
            headerName: 'Acciones',
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

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={10} paddingBottom={15} >

                <Grid item style={{ width: "1400px" }} >

                    <Grid container direction="row" alignItems="center" justifyContent='center' marginTop={5} padding={5}>
                        <Grid item lg={12} padding={1} textAlign="center" paddingBottom={5}  >
                            <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                Programación Semestre
                            </Typography>
                        </Grid>

                        {
                            rowsData.length !== 0 && (

                                <Grid item lg={12} padding={1}     >

                                    <div style={{ height: 400, width: '100%' }}>

                                        <DataGrid
                                            rows={rowsData}
                                            columns={columns}
                                            sx={table}
                                            style={{ fontSize: "15px", fontWeight: "bold" }}
                                            pageSize={5}
                                            getRowId={(row) => row.id_registro}

                                        />

                                    </div>
                                </Grid>

                            )
                        }

                        {
                            rowsData.length === 0 && (

                                <Grid container lg={12} padding={1} justifyContent="center" alignItems="center" style={{ backgroundColor: "#77BFA3", height: "200px" }}  >

                                    <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                        No tiene registros ingresados
                                    </Typography>

                                </Grid>

                            )
                        }


                        {
                            notificacion === 1 && (
                                <Alert variant="filled" severity="success">
                                    Se Actualizo la asistencia correctamente
                                </Alert>
                            )
                        }

                        {
                            notificacion === 2 && (
                                <Alert variant="filled" severity="error">
                                    Ocurrio un error en la actualizacion
                                </Alert>
                            )
                        }

                        {
                            notificacion2 === 1 && (
                                <Alert variant="filled" severity="success">
                                    Se Elimino el registro correctamente
                                </Alert>
                            )
                        }

                        {
                            notificacion2 === 2 && (
                                <Alert variant="filled" severity="error">
                                    Ocurrio un error en la eliminacion
                                </Alert>
                            )
                        }




                    </Grid>



                </Grid>

            </Grid>

            {
                modal && (
                    <EditarRegistroDialog filas={filas} setFilas={setFilas} setNotificacion={setNotificacion} setBandera={setBandera} bandera={bandera} modal={modal} setModal={setModal}></EditarRegistroDialog>
                )
            }

            {
                modal2 && (
                    <EliminarRegistroDialog filas={filas} setFilas={setFilas} setNotificacion={setNotificacion2} setBandera={setBandera} bandera={bandera} modal={modal2} setModal={setModal2}></EliminarRegistroDialog>
                )
            }



            <Footer></Footer>


        </Grid>
    )
}

export default EditarRegistro