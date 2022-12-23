import { Alert, Button, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'

// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axiosClient from '../config/AxiosClient'
import imagenSend from '../img/Checklist_Two Color.svg'
import AsignarDocente from './AsignarDocente'
import Footer from './Footer'

const button = {
    backgroundColor: "#748cab",
    width: "130px",
    height: "50px",
    color: "#FFFFFF",
    '&:hover': {
        backgroundColor: "#748CCE",
        transition: 'all 0.2s ease-in'
    }

}

const input = {
    '&.Mui-focused': {
        backgroundColor: 'transparent',
        borderColor: "#748CCE"
    },
}


const button2 = {
    backgroundColor: "#405D72",
    width: "180px",
    height: "50px",
    color: "#FFFFFF",
    '&:hover': {
        backgroundColor: "#2D314B",
        transition: 'all 0.2s ease-in'
    }

}


const CrearRegistro = () => {

    const [materias, setMaterias] = useState([])
    const [notificacion, setNotificacion] = useState(0)
    const { enqueueSnackbar } = useSnackbar(); 

    const { id_usuario, token } = useSelector(state => state.login)

    const [datos, setDatos] = useState({
        id_docente: id_usuario,
        id_materia: "",
        horas_dictadas: "",
        tema_dictado: "",
        num_estudiantes: "",
        observacion: ""
    })


    const { id_docente, id_materia, horas_dictadas, tema_dictado , num_estudiantes , observacion } = datos

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const queryGet = async (url, funcion) => {

        try {
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const { data } = await axiosClient.get(url);
            funcion(data.data)

        } catch (err) {
            console.log(err)
        }

    }

    const limpiarCampos = ()=>{
        setDatos({
            ...datos,
            id_materia: "",
            horas_dictadas: 0,
            tema_dictado: "",
            num_estudiantes: "",
            observacion: ""
        })
    }

    const enviarFormulario = () => {
        if (id_materia != "" && id_docente != "" && horas_dictadas != "" && tema_dictado != "" && num_estudiantes != "" && observacion != "") {
            queryPost()
        } else {
            enqueueSnackbar("Campos vacios", { variant: 'error' })
        }
    }

    const queryPost = async (url) => {

        try {
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const { data } = await axiosClient.post('/crearRegistro', datos);

            console.log(data)
            if (data.code === 1) {
                enqueueSnackbar("Se inserto la asistencia correctamente", { variant: 'success' })
                limpiarCampos()
            } else {
                enqueueSnackbar("Ocurrio un error en la inserción", { variant: 'error' })
            }

        } catch (err) {
            enqueueSnackbar("Ocurrio un error en la API de insertar", { variant: 'error' })
        }

    }


    useEffect(() => {
        if (id_usuario !== undefined) {
            queryGet(`/consultarMaterias/${id_usuario}`, setMaterias)
        }
    }, [id_usuario])

    return (

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={5} paddingBottom={5} >

                <Grid item style={{ width: "600px" }} >



                    <Grid container direction="row" alignItems="center" justifyContent='center' marginTop={3} padding={5}>
                        <Grid item xs={12} padding={1} textAlign="center" paddingBottom={5}  >
                            <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                Crear Registro
                            </Typography>
                        </Grid>
                        <Grid item xs={6} padding={1}     >
                            <FormControl fullWidth  >
                                <InputLabel id="demo-simple-select-label">Horas Dictadas</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Horas Dictadas"
                                    value={horas_dictadas}
                                    onChange={handleChange}
                                    name='horas_dictadas'
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>7</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} padding={1} textAlign="center"  >
                            <TextField sx={input} fullWidth id="outlined-basic" value={num_estudiantes} onChange={handleChange} name='num_estudiantes' label="Numero estudiantes" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} padding={1}   >
                            <TextField sx={input} fullWidth id="outlined-basic" value={tema_dictado} onChange={handleChange} name='tema_dictado' label="Tema Dictado" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} padding={1}     >
                            <FormControl fullWidth  >
                                <InputLabel id="demo-simple-select-label">Asignatura</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Asignatura"
                                    name='id_materia'
                                    value={id_materia}
                                    onChange={handleChange}
                                >
                                    {materias.map(x => (
                                        <MenuItem value={x.id_materia} key={x.id_materia}>{x.asignatura}</MenuItem>
                                    ))}


                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} padding={1}     >
                            <TextField sx={input} multiline
                                rows={4} fullWidth id="outlined-basic" value={observacion} onChange={handleChange} name='observacion' label="Observaciones" variant="outlined" />
                        </Grid>

                        <Grid item xs={12} padding={1} textAlign="center"    >
                            <Button size="large" onClick={enviarFormulario} sx={button2} variant="contained">Crear Registro</Button>
                        </Grid>

                    </Grid>



                </Grid>


            </Grid>



            <Footer></Footer>


        </Grid>
    )
}

export default CrearRegistro