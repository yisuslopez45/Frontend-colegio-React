
import { Button, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from 'react'
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
        borderColor:"#748CCE"
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
                    <Grid item lg={6} padding={1}     >
                        <TextField sx={input}  fullWidth id="outlined-basic" label="Nombres" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} padding={1}   >
                        <TextField fullWidth id="outlined-basic" label="Apellidos" variant="outlined"   />
                    </Grid>
                    <Grid item lg={12} padding={1} textAlign="center"  >
                        <TextField fullWidth id="outlined-basic" label="Direccion" variant="outlined"   />
                    </Grid>
                    <Grid item lg={6} padding={1}     >
                        <TextField fullWidth id="outlined-basic" label="Telefono" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} padding={1}   >
                        <TextField fullWidth id="outlined-basic" label="Cedula" variant="outlined" />
                    </Grid>
                    <Grid item lg={12} padding={1} textAlign="center"    >
                        <FormControl fullWidth  >
                            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                label="Sexo"

                            >
                                <MenuItem value={1}>Hombre</MenuItem>
                                <MenuItem value={2}>Mujer</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>

                </>
            )
                break;

            case 2: return (
                <>
                    <Grid item lg={6} padding={1}     >
                        <FormControl fullWidth  >
                            <InputLabel   id="demo-simple-select-label">Nacionalidad</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                label="Edad"

                            >
                                <MenuItem value={1}>Colombia</MenuItem>
                                <MenuItem value={2}>Mexico</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} padding={1}   >
                        <FormControl fullWidth  >
                            <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                label="Edad"

                            >
                                <MenuItem value={1}>Cauca</MenuItem>
                                <MenuItem value={2}>Valle del cauca</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={12} padding={1} textAlign="center"  >
                        <TextField fullWidth id="outlined-basic" label="Ciudad" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} padding={1}     >
                        <FormControl fullWidth  >
                            <InputLabel id="demo-simple-select-label">Profesion</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                label="Profesion"

                            >
                                <MenuItem value={1}>Licenciado</MenuItem>
                                <MenuItem value={2}>Ingeniero</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} padding={1}   >
                        <FormControl fullWidth  >
                            <InputLabel id="demo-simple-select-label">Asignatura</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                label="Asignatura"

                            >
                                <MenuItem value={1}>Matematicas</MenuItem>
                                <MenuItem value={2}>Ingles</MenuItem>

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
                    <Grid item lg={6} padding={1} textAlign="center"    >
                        <TextField fullWidth id="outlined-basic" label="Contraseña" variant="outlined" />
                    </Grid>

                    <Grid item lg={6} padding={1} textAlign="center"    >
                        <TextField fullWidth id="outlined-basic" label="confirmar Contraseña" variant="outlined" />
                    </Grid>

                </>
            )
                break
        }
    }
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
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
        setActiveStep(0);
    };


    return (

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={20} paddingBottom={15} >

                <Grid item style={{ width: "600px" }} >


                    <Grid container direction="row" alignItems="center" justifyContent='center' >

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
                                        <Grid item >
                                            <Typography style={{fontSize:"25px",fontWeight:"bold"}} >
                                                Completo el registro correctamente
                                            </Typography>
                                        </Grid>

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

                                    <Box sx={{ display: 'flex', flexDirection: 'row' , justifyContent:"center" , pt: 2 }}>
                                        
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

                </Grid>

            </Grid>



            <Footer></Footer>


        </Grid>
    )
}

export default CrearUsuario