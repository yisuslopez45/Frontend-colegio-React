import { Button, CardMedia, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'

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



    return (

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={10} paddingBottom={15} >

                <Grid item style={{ width: "600px" }} >



                    <Grid container direction="row" alignItems="center" justifyContent='center' marginTop={5} padding={5}>
                        <Grid item lg={12} padding={1} textAlign="center" paddingBottom={5}  >
                            <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                Crear Registro
                            </Typography>
                        </Grid>
                        <Grid item lg={6} padding={1}     >
                            <FormControl fullWidth  >
                                <InputLabel id="demo-simple-select-label">Horas Dictadas</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="horasDictadas"

                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} padding={1} textAlign="center"  >
                            <TextField sx={input} fullWidth id="outlined-basic" label="Estudiantes" variant="outlined" />
                        </Grid>
                        <Grid item lg={12} padding={1}   >
                            <TextField sx={input} fullWidth id="outlined-basic" label="Tema Dictado" variant="outlined" />
                        </Grid>
                        <Grid item lg={12} padding={1}     >
                            <FormControl fullWidth  >
                                <InputLabel id="demo-simple-select-label">Asignatura</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="horasDictadas"

                                >
                                    <MenuItem value={1}>Matematica</MenuItem>
                                    <MenuItem value={2}>Ingles</MenuItem>
                                 

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} padding={1}     >
                            <TextField sx={input} multiline
                                rows={4} fullWidth id="outlined-basic" label="Observaciones" variant="outlined" />
                        </Grid>

                        <Grid item lg={12} padding={1} textAlign="center"    >
                            <Button size="large" sx={button2} variant="contained">Crear Registro</Button>
                        </Grid>

                    </Grid>



                </Grid>

            </Grid>



            <Footer></Footer>


        </Grid>
    )
}

export default CrearRegistro