
import { Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'

// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react'
import { useState } from 'react';
import axiosClient from '../config/AxiosClient';
import imagenSend from '../img/Checklist_Two Color.svg'
import Footer from './Footer'

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

const InformeAdmin = () => {

    const [docentes, setDocentes] = useState([])
    const [cedula, setCedula] = useState(0)
    const [data, setData] = useState({})
    const [info, setInfo] = useState([])
    

    const queryGet = async (url, funcion) => {

        try {
            //axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + userT?.jwt
            const { data } = await axiosClient.get(url);
            console.log(data.data)
            funcion(data.data)

        } catch (err) {
            console.log(err)
            setInfo([])

        }

    }

    useEffect(() => {
        queryGet('/consultarDocentes', setDocentes)
    }, [])

    useEffect(()=>{
        queryGet(`/consultarDocenteCedula/${cedula}`, setData)
    },[cedula])

    useEffect(()=>{
        if(data.id_usuario !== undefined){     
            queryGet(`/RegistroAsistencia/${data.id_usuario}`, setInfo)
        }
    },[data.id_usuario])



    let rows1 = []
    rows1.push(data)

    const columns = [

        {
            field: 'id_usuario',
            headerName: 'Id usuario',
            flex: 1
        },

        {
            field: "nombre",
            headerName: 'Nombre docente',
            flex: 1

        },

        {
            field: "apellido",
            headerName: 'apellido',
            flex: 1

        },
        {
            field: "correo",
            headerName: 'Correo',
            flex: 1


        },


        {
            field: 'telefono',
            headerName: 'telefono',
            flex: 1
        },

        {
            field: 'cedula',
            headerName: 'cedula',
            flex: 1

        },


    ];

    const columns2 = [

        {
            field: 'asignatura',
            headerName: 'Asignatura',
            flex: 1
        },

        {
            field: "intencidad",
            headerName: 'Intencidad',
            flex: 1

        },

        {
            field: "precio_hora",
            headerName: 'Precio Hora',
            flex: 1

        },
        {
            field: "dictadas",
            headerName: 'Horas dictadas',
            flex: 1


        },
        {
            field: "TotalPago",
            headerName: 'Total Pago',
            flex: 1


        },


    ];


    return (

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={10} paddingBottom={15} >

                <Grid item style={{ width: "1200px" }} >

                    <Grid container direction="column" alignItems="center" justifyContent='center' marginTop={5} padding={5}>
                        <Grid item lg={12} padding={1} textAlign="center" paddingBottom={5}  >
                            <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                Programación Semestre
                            </Typography>
                        </Grid>

                        <Grid item lg={12} style={{display:"flex" , justifyContent:"left" }} >
                          
                            <FormControl style={{width:"200px"}}  >
                            <InputLabel id="demo-simple-select-label">Materia</InputLabel>
                            <Select
                                value={cedula}
                                onChange={(e)=>{ setCedula(e.target.value) }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="id_materia"
                                label="Asignatura"

                            >

                                {docentes.map(x => (
                                    <MenuItem value={x.cedula} key={x.cedula}>{x.nombre} {x.apellido}</MenuItem>
                                ))}


                            </Select>
                        </FormControl>
                          
                        </Grid>

                        <Grid item xs={12} padding={1}   >

                            <Grid item xs={12} marginBottom={5}>
                                <Typography
                                    style={{ fontSize: "15px", fontWeight: "bold" }}
                                >
                                    Información del docente
                                </Typography>
                                <Divider style={{ backgroundColor: 'rgb(89, 60, 120)' }} />
                            </Grid>


                            <Grid item xs={12} style={{ width: "1200px" }}>

                                <DataGrid
                                    autoHeight
                                    rows={rows1}
                                    columns={columns}
                                    sx={table}
                                    style={{ fontSize: "15px", fontWeight: "bold" }}
                                    pageSize={5}

                                    getRowId={(row) => parseInt(row.id_usuario)}

                                />
                            </Grid>


                        </Grid>


                      {
                        info.length !== 0 && (
                            <Grid item lg={12} padding={1}     >

                            <Grid item xs={12} marginBottom={5}>
                                <Typography
                                    style={{ fontSize: "15px", fontWeight: "bold" }}
                                >
                                    Informacion Trabajo
                                </Typography>
                                <Divider style={{ backgroundColor: 'rgb(89, 60, 120)' }} />
                            </Grid>


                            <Grid item xs={12} style={{ width: "1200px" }}>

                                <DataGrid
                                    autoHeight
                                    rows={info}
                                    columns={columns2}
                                    sx={table}
                                    style={{ fontSize: "15px", fontWeight: "bold" }}
                                    pageSize={5}

                                    getRowId={(row) => row.id_docente}

                                />
                            </Grid>
                        </Grid>

                        )
                      }


                    </Grid>



                </Grid>

            </Grid>



            <Footer></Footer>


        </Grid>
    )
}

export default InformeAdmin