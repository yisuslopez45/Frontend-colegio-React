import { Button, Dialog, DialogContent, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'



const button = {
    backgroundColor: "#748cab",
    width: "110px",
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
    width: "110px",
    height: "50px",
    color: "#FFFFFF",
    '&:hover': {
        backgroundColor: "#2D314B",
        transition: 'all 0.2s ease-in'
    }

}



const EditarRegistroDialog = ({ setModal, modal }) => {
    return (
        <Dialog
            open={modal}
            onClose={() => setModal(false)}

            maxWidth={'md'}

        >
            <DialogContent dividers>
                <Paper elevation={3}  style={{ backgroundColor: '#77BFA3', height:"50px" , display:"flex", alignItems:"center" , justifyContent:"center" , marginTop:"30px"  , color: '#fff' }}>
                    <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                        Editar Registro
                    </Typography>
                </Paper>
                <Grid item style={{ width: "600px" }} marginTop={3} marginBottom={3} >

                    <Grid container direction="row" alignItems="center" justifyContent='center' >

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



                        <Grid item xs={12} sm={12} style={{ textAlign: 'end', padding: '10px' }}>

                            <Button
                                variant="contained"
                                sx={button}
                            >
                                Cancelar
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                sx={button2}
                                style={{ marginLeft: '10px' }}
                            >
                                Guardar
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>

            </DialogContent>
        </Dialog >
    )
}

export default EditarRegistroDialog