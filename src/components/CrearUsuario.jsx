
import { NoMealsRounded } from '@mui/icons-material';
import { Alert, Button, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, skeletonClasses, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { useSnackbar } from 'notistack';
// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axiosClient from '../config/AxiosClient';
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
    width: "130px",
    height: "50px",
    color: "#FFFFFF",
    '&:hover': {
        backgroundColor: "#2D314B",
        transition: 'all 0.2s ease-in'
    }

}

const steps = ['Registro datos básicos', 'Registro datos personales '];

const CrearUsuario = () => {

    const [listProfesion, setlistaProfesion] = useState([])
    const [listMaterias, setlistaMaterias] = useState([])
    const [banderaPassword, setBanderaPassword] = useState(false)
    const [notificacion, setNotificacion] = useState(0)
    const [SkippedFormulario, setSkippedFormulario] = useState(0)

    const [datosUsuario, setdatosUsuario] = useState({
        nombres: "",
        apellidos: "",
        direccion: "",
        telefono: "",
        cedula: "",
        id_sexo: "",
        ciudad: "",
        id_profesion: "",
        id_materia: "",
        password: "",
        password2: "",
        cod_rol: "",
        correo: "",

    })

    const { nombres   , apellidos ,direccion ,telefono ,cedula ,id_sexo ,ciudad ,id_profesion , 
        id_materia ,password , password2  , cod_rol ,correo  } = datosUsuario

    const queryGet = async (url, funcion) => {

        try {
            //axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + userT?.jwt
            const { data } = await axiosClient.get(url);

            funcion(data.data)

        } catch (err) {
            console.log(err)
        }

    }

    const queryPost = async (url) => {

        try {
            //axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + userT?.jwt
            const { data } = await axiosClient.post('/crearUsuario', datosUsuario);

            if (data.code === "1") {
                setNotificacion(1)
                limpiarCampos()
            } else {
                setNotificacion(2)
            }

        } catch (err) {
            setNotificacion(2)
        }

    }

    const limpiarCampos =()=>{
        setdatosUsuario({
            nombres: "",
            apellidos: "",
            direccion: "",
            telefono: "",
            cedula: "",
            id_sexo: "",
            ciudad: "",
            id_profesion: "",
            id_materia: "",
            password: "",
            password2: "",
            cod_rol: "",
            correo: "",     
        })
    }

    useEffect(() => {


        if (datosUsuario.password.length > 0 && datosUsuario.password2.length > 0) {
            if (datosUsuario.password !== datosUsuario.password2) {
                setBanderaPassword(true)
            } else {
                setBanderaPassword(false)
            }
        } else {
            setBanderaPassword(false)
        }

    }, [datosUsuario.password, datosUsuario.password2])


    useEffect(() => {

        queryGet('/consultarProfesiones', setlistaProfesion)
        queryGet('/consultarMaterias', setlistaMaterias)
    }, [])


    const handleChange = (e) => {

        setdatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value,
            [e.target.name+"Estado"]: "false"
        })

    }



    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const rotarPagina = (index) => {
        switch (index) {
            case 1: return (
                <>
                    <Grid item lg={6} md={6}  sm={6} xs={12} padding={1}     >
                        <TextField sx={input} fullWidth value={nombres} onChange={handleChange} id="outlined-basic"name='nombres' label="Nombres" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} padding={1}   >
                        <TextField fullWidth id="outlined-basic" value={apellidos} onChange={handleChange}  name='apellidos' label="Apellidos" variant="outlined" />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} padding={1} textAlign="center"  >
                        <TextField fullWidth id="outlined-basic" value={direccion} onChange={handleChange}  name='direccion' label="Direccion" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} padding={1}     >
                        <TextField fullWidth id="outlined-basic" value={telefono} onChange={handleChange}  type="number" name='telefono' label="Telefono" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} padding={1}   >
                        <TextField fullWidth id="outlined-basic" value={cedula} onChange={handleChange} type="number" name='cedula' label="Cedula" variant="outlined" />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} padding={1} textAlign="center"    >
                        <FormControl fullWidth  >
                            <InputLabel name="id_sexo" id="demo-simple-select-label">Sexo</InputLabel>
                            <Select
                               
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleChange}
                                value={id_sexo}
                                name="id_sexo"
                                label="Sexo"

                            >
                                <MenuItem value={1}>Hombre</MenuItem>
                                <MenuItem value={3}>Mujer</MenuItem>
                                <MenuItem value={2}>Otro</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>

                </>
            )
                break;

            case 2: return (
                <>
                    <Grid item xs={12} sm={6} padding={1} textAlign="center"  >
                        <TextField fullWidth onChange={handleChange} value={ciudad} name='ciudad' id="outlined-basic" label="Ciudad" variant="outlined" />
                    </Grid>

                    <Grid item xs={12} sm={6} padding={1}     >
                        <FormControl fullWidth  >
                            <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                            <Select
                                value={cod_rol}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='cod_rol'
                                label="Profesion"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}  >Docente</MenuItem>
                                <MenuItem value={2} >Administrador</MenuItem>


                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6} padding={1}     >
                        <FormControl fullWidth  >
                            <InputLabel id="demo-simple-select-label">Profesion</InputLabel>
                            <Select
                                value={id_profesion}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='id_profesion'
                                label="Profesion"
                                onChange={handleChange}
                            >
                                {listProfesion.map(x => (
                                    <MenuItem value={x.id_profesion} key={x.id_profesion}>{x.descripcionprofesion}</MenuItem>
                                ))}


                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6} padding={1}   >
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
                        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Date&Time picker"
                                value={null}
                                renderInput={(params) => <TextField fullWidth {...params} />}
                            />
                        </LocalizationProvider> */}

                    </Grid>

                    <Grid item xs={12} sm={12} padding={1}     >
                        <TextField sx={input} fullWidth value={correo} onChange={handleChange} id="outlined-basic" name='correo' label="Correo" variant="outlined" />
                    </Grid>

                    <Grid item xs={12} sm={6} padding={1} textAlign="center"    >
                        <TextField value={password} required fullWidth type="password" id="outlined-basic" label="Contraseña" onChange={handleChange} name='password' variant="outlined" />
                    </Grid>

                    <Grid item xs={12} sm={6} padding={1} textAlign="center"    >
                        <TextField value={password2} required fullWidth  type="password" id="outlined-basic" name='password2' onChange={handleChange} label="confirmar Contraseña" variant="outlined" />
                    </Grid>

                </>
            )
                break
        }
    }
    const handleNext = () => {

        //validarCampos()

        const { nombres ,apellidos, direccion, telefono, cedula, id_sexo, ciudad, id_profesion, id_materia, password, password2, cod_rol, correo } = datosUsuario

  
        if (nombres.trim() != "" && apellidos.trim() != "" && direccion.trim() != "" && telefono.trim() != "" && cedula.trim() != "" && id_sexo !== "" ) {

            let newSkipped = skipped;

            if (isStepSkipped(activeStep)) {
                newSkipped = new Set(newSkipped.values());
                newSkipped.delete(activeStep);
            }

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);

        }else{

            setNotificacion(3)
        }

        console.log(steps.length-1)

        if (activeStep === steps.length - 1) {
            
            if (ciudad.trim() != "" && id_profesion !== "" && id_materia != "" && password.trim() != "" && password2.trim() != "" && cod_rol !== ""  && correo !== "") {
                queryPost()
            }else{
                setNotificacion(3)
            }  
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setNotificacion(0)
        setActiveStep(0);
    };


    return (

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={15} paddingBottom={15} >

                <Grid item style={{ width: "600px" }} >



                    <Grid container direction="row" alignItems="center" justifyContent='center' padding={5}>

                        <Grid item padding={1} textAlign="center" paddingBottom={5}  >
                            <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                Crear Usuario
                            </Typography>
                        </Grid>

                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    // if (isStepOptional(index)) {
                                    //     labelProps.optional = (
                                    //         <Typography variant="caption">Optional</Typography>
                                    //     );
                                    // }
                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false;
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel  {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (

                                <React.Fragment>
                                    <Grid container direction="row" alignItems="center" justifyContent='center' marginTop={5}>


                                        <Grid item  >
                                            <CardMedia

                                                component="img"
                                                src={imagenSend}
                                                alt="green"
                                                height="230px"
                                                width="230px"

                                            />
                                        </Grid>
                                    </Grid>

                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center", pt: 2 }}>

                                        <Button bor sx={button2} onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                    <Grid container direction="row" alignItems="center" justifyContent='center' marginTop={5}>
                                        {rotarPagina(activeStep + 1)}
                                    </Grid>

                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            variant="contained"
                                            sx={button}
                                        >
                                            Atras
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        {/* {isStepOptional(activeStep) && (
                                            <Button color="inherit" style={{marginRight:"10px"}} sx={button} variant="contained" onClick={handleSkip} >
                                                Saltar
                                            </Button>
                                        )} */}

                                        <Button onClick={handleNext} sx={button2} variant="contained">
                                            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Box>

                    </Grid>

                    {
                        banderaPassword && (
                            <Alert variant="filled" severity="error">
                                Las contraseñas no coinciden
                            </Alert>
                        )
                    }

                    {
                        notificacion === 1 && (
                            <Alert variant="filled" severity="success">
                                Se registro el usuario Correctamente
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

export default CrearUsuario