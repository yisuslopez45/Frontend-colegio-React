
import { Alert, Button, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'

// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useEffect, useState } from 'react'
import axiosClient from '../config/AxiosClient'
import imagenSend from '../img/Checklist_Two Color.svg'
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


const AsignarDocente = () => {

    const [listMaterias, setlistaMaterias] = useState([])
    const [docentes, setDocentes] = useState([])
    const [notificacion, setNotificacion] = useState(0)

    const [datosUsuario, setdatosUsuario] = useState({
        intencidad: "",
        id_materia: "",
        id_docente: "",
        precio_hora: "",
        semestre: ""

    })

    const { id_materia, precio_hora, intencidad, id_docente, semestre } = datosUsuario

    const queryGet = async (url, funcion) => {

        try {
            //axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + userT?.jwt
            const { data } = await axiosClient.get(url);

            funcion(data.data)

        } catch (err) {
            console.log(err)
        }

    }

    const enviarFormulario = () => {
        if (id_materia != "" && precio_hora != "" && intencidad != "" && id_docente != "" && semestre != "") {
            queryPost()
        } else {
            setNotificacion(3)
        }
    }

    const queryPost = async () => {

        console.log(datosUsuario)

        try {
            //axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + userT?.jwt
            const { data } = await axiosClient.post("/crearProSemestre", datosUsuario);

            console.log(data)
            if (data.code === 1) {
                setNotificacion(1)
            }else{
                setNotificacion(2)
            }

        } catch (err) {
            setNotificacion(2)
        }
    }

    useEffect(() => {
        queryGet('/consultarMaterias', setlistaMaterias)
    }, [])

    useEffect(() => {
        queryGet(`/consultarDocentesMateria/${id_materia}`, setDocentes)
    }, [id_materia])


    const handleChange = (e) => {

        setdatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value
        })

    }


    return (

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={18} paddingBottom={15} >

                <Grid item style={{ width: "600px" }} >



                    <Grid container direction="row" alignItems="center" justifyContent='center' marginTop={5} padding={5}>
                        <Grid item lg={12} padding={1} textAlign="center" paddingBottom={5}  >
                            <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                Programación Semestre
                            </Typography>
                        </Grid>
                        <Grid item lg={6} padding={1}     >
                            <FormControl fullWidth  >
                                <InputLabel id="demo-simple-select-label">Materia</InputLabel>
                                <Select
                                    value={id_materia}
                                    onChange={handleChange}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="id_materia"
                                    label="Asignatura"

                                >

                                    {listMaterias.map(x => (
                                        <MenuItem value={x.id_materia} key={x.id_materia}>{x.asignatura}</MenuItem>
                                    ))}


                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} padding={1}   >
                            <FormControl fullWidth  >
                                <InputLabel id="demo-simple-select-label">Intensidad Curso</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='intencidad'
                                    value={intencidad}
                                    label="Intensidad Curso"
                                    onChange={handleChange}

                                >
                                    <MenuItem value={1}>1 Horas</MenuItem>
                                    <MenuItem value={2}>2 Horas</MenuItem>
                                    <MenuItem value={3}>3 Horas</MenuItem>
                                    <MenuItem value={4}>4 Horas</MenuItem>
                                    <MenuItem value={5}>5 Horas</MenuItem>
                                    <MenuItem value={6}>6 Horas</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} padding={1} textAlign="center"  >
                            <FormControl fullWidth  >
                                <InputLabel id="demo-simple-select-label">Semestre a cursar</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={semestre}
                                    name="semestre"
                                    label="Semestre a cursar"
                                    onChange={handleChange}

                                >
                                    <MenuItem value={"Primero"}>Primero</MenuItem>
                                    <MenuItem value={"Segundo"}>Segundo</MenuItem>
                                    <MenuItem value={"Tercero"}>Tercero</MenuItem>
                                    <MenuItem value={"Cuarto"}>Cuarto</MenuItem>
                                    <MenuItem value={"Quinto"}>Quinto</MenuItem>
                                    <MenuItem value={"Sexto"}>Sexto</MenuItem>
                                    <MenuItem value={"Septimo"}>Septimo</MenuItem>
                                    <MenuItem value={"Octavo"}>Octavo</MenuItem>
                                    <MenuItem value={"Noveno"}>Noveno</MenuItem>
                                    <MenuItem value={"Decimo"}>Decimo</MenuItem>


                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} padding={1}     >
                            <TextField fullWidth value={precio_hora} onChange={handleChange} id="outlined-basic" name='precio_hora' label="Precio Hora" variant="outlined" />
                        </Grid>
                        <Grid item lg={12} padding={1}     >
                            <FormControl fullWidth  >
                                <InputLabel id="demo-simple-select-label">Docente a cargo</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='id_docente'
                                    value={id_docente}
                                    label="Semestre a cursar"
                                    onChange={handleChange}
                                >

                                    {docentes.map(x => (
                                        <MenuItem value={x.id_usuario} key={x.id_usuario}>{x.nombre} {x.apellido}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item lg={12} padding={1} textAlign="center"    >
                            <Button size="large" onClick={() => { enviarFormulario() }} sx={button2} variant="contained">Crear Semestre</Button>
                        </Grid>

                    </Grid>

                    {
                        notificacion === 1 && (
                            <Alert variant="filled" severity="success">
                                Se creo el registro correctamente
                            </Alert>
                        )
                    }

                    {
                        notificacion === 2 && (
                            <Alert variant="filled" severity="error">
                                Ocurrio un error en el registro
                            </Alert>
                        )
                    }

                    {
                        notificacion === 3 && (
                            <Alert variant="filled" severity="error">
                                Campos Vacios
                            </Alert>
                        )
                    }

                </Grid>

            </Grid>



            <Footer></Footer>


        </Grid>
    )
}

export default AsignarDocente