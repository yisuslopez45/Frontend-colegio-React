
import { Alert, Button, CardMedia, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'

// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useEffect, useState } from 'react'
import axiosClient from '../config/AxiosClient'
import imagenSend from '../img/Checklist_Two Color.svg'
import Footer from './Footer'
import { green } from '@mui/material/colors';
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'





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
    const { token } = useSelector(state => state.login)
    const [docentes, setDocentes] = useState([])
    const { enqueueSnackbar } = useSnackbar();
    const [loading2, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);


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
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const { data } = await axiosClient.get(url);

            funcion(data.data)

        } catch (err) {
            console.log(err)
        }

    }

    const handleButtonClick = () => {

        if (id_materia != "" && precio_hora != "" && intencidad != "" && id_docente != "" && semestre != "") {
            queryPost()
        } else {
            setLoading(false)
            enqueueSnackbar("Campos vacíos", { variant: 'error' })
        }

    };


    const queryPost = async () => {


        try {
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const { data } = await axiosClient.post("/crearProSemestre", datosUsuario);

            console.log(data)
            if (data.code === 1) {
                enqueueSnackbar("Se creo la asignación correctamente", { variant: 'success' })
                setLoading(false)

            } else {
                enqueueSnackbar("Ocurrió un error en la asignación del semestre", { variant: 'error' })
                setLoading(false)

            }

        } catch (err) {
            enqueueSnackbar("Ocurrió un error en la API de asignación del semestre", { variant: 'error' })
            setLoading(false)
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

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={10} paddingBottom={5} >

                <Grid item style={{ width: "600px" }} >



                    <Grid container direction="row" alignItems="center" justifyContent='center' marginTop={5} padding={5}>
                        <Grid item xs={12} sm={12} padding={1} textAlign="center" paddingBottom={5}  >
                            <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                Programación Semestre
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} padding={1}     >
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

                        <Grid item xs={12} sm={6} padding={1}   >
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

                        <Grid item xs={12} sm={12} padding={1} textAlign="center"  >
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

                        <Grid item xs={12} sm={12} padding={1}     >
                            <TextField fullWidth value={precio_hora} onChange={handleChange} id="outlined-basic" name='precio_hora' label="Precio Hora" variant="outlined" />
                        </Grid>

                        <Grid item xs={12} sm={12} padding={1}     >
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

                        <Grid item xs={12} sm={12} padding={1} textAlign="center"    >

                            <Box sx={{ m: 1, position: 'relative', width: "100%" }}  >

                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={button2}
                                    disabled={loading2}
                                    onClick={handleButtonClick}

                                >Ingresar
                                </Button>


                                {loading2 && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            color: green[500],
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            marginTop: '-12px',
                                            marginLeft: '-12px',
                                        }}
                                    />
                                )}
                            </Box>

                        {/* <Button size="large" onClick={() => { enviarFormulario() }} sx={button2} variant="contained">Crear Semestre</Button> */}
                        </Grid>

                    </Grid>



                </Grid>

            </Grid>



            <Footer></Footer>


        </Grid>
    )
}

export default AsignarDocente