
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


const AsignarDocente = () => {



    return (

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={18} paddingBottom={15} >

                <Grid item style={{ width: "600px" }} >

                 

                        <Grid container direction="row" alignItems="center" justifyContent='center' marginTop={5} padding={5}>
                            <Grid item lg={12} padding={1} textAlign="center"  paddingBottom={5}  >
                                <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                    Programación Semestre
                                </Typography>
                            </Grid>
                            <Grid item lg={6} padding={1}     >
                                <FormControl fullWidth  >
                                    <InputLabel id="demo-simple-select-label">Asignatura</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Asignatura"

                                    >
                                        <MenuItem value={1}>Matematcias</MenuItem>
                                        <MenuItem value={2}>Ingles</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={6} padding={1}   >
                                <FormControl fullWidth  >
                                    <InputLabel id="demo-simple-select-label">Intensidad Curso</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Intensidad Curso"

                                    >
                                        <MenuItem value={1}>1 Hora</MenuItem>
                                        <MenuItem value={2}>2 Hora</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={12} padding={1} textAlign="center"  >
                                <FormControl fullWidth  >
                                    <InputLabel id="demo-simple-select-label">Semestre a cursar</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Semestre a cursar"

                                    >
                                        <MenuItem value={1}>Primero</MenuItem>
                                        <MenuItem value={2}>Segundo</MenuItem>
                                        <MenuItem value={2}>Tercero</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={12} padding={1}     >
                                <FormControl fullWidth  >
                                    <InputLabel id="demo-simple-select-label">Docente a cargo</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Semestre a cursar"

                                    >
                                        <MenuItem value={1}>Miguel</MenuItem>
                                        <MenuItem value={2}>Pablo</MenuItem>
                                        <MenuItem value={2}>Carlos</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                    
                            <Grid item lg={12} padding={1} textAlign="center"    >
                                <Button size="large" sx={button2} variant="contained">Crear Semestre</Button>
                            </Grid>

                        </Grid>

              

                </Grid>

            </Grid>



            <Footer></Footer>


        </Grid>
    )
}

export default AsignarDocente