import { Alert, Button, Dialog, DialogContent, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axiosClient from '../../config/AxiosClient'



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



const EditarRegistroDialog = ({ setModal, setNotificacion , setBandera , bandera, modal, filas, setFilas }) => {

    

    const datos = {
        id_registro: filas.id_registro, 
        horas_dictadas: filas.horas_dictadas,
        tema_dictado: filas.tema_dictado,
        num_estudiantes: filas.num_estudiantes,
        observacion: filas.observacion
    }

    const handleChange = (e) =>{
        setFilas({
            ...filas,
            [e.target.name] : e.target.value
        })
    }

    const queryPost = async () => {
        
        console.log(datos)
        try {
            //axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + userT?.jwt
            const { data } = await axiosClient.put('/actualizarRegistro', datos);


            console.log(data)

            if (data.code === 1) {
                setBandera(bandera+1)
                setModal(false)
                setNotificacion(1)
            } else {
                setNotificacion(2)
            }

        } catch (err) {
            setNotificacion(2)
        }

    }

    const editarRegistro = () => {
        queryPost()
    }

    return (
        <Dialog
            open={modal}
            onClose={() => setModal(false)}

            maxWidth={'md'}

        >
            <DialogContent dividers>
                <Paper elevation={3} style={{ backgroundColor: '#77BFA3', height: "50px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px", color: '#fff' }}>
                    <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                        Editar Registro
                    </Typography>
                </Paper>
                <Grid item  marginTop={3} marginBottom={3} >

                    <Grid container direction="row" alignItems="center" justifyContent='center' >

                        <Grid item sm={6} xs={12} padding={1}     >
                            <FormControl fullWidth  >
                                <InputLabel id="demo-simple-select-label">Horas Dictadas</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='horas_dictadas'
                                    value={filas.horas_dictadas}
                                    label="Horas Dictadas"
                                    onChange={handleChange}

                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sm={6}  xs={12}  padding={1} textAlign="center"  >
                            <TextField sx={input} name='num_estudiantes'
                                onChange={handleChange}
                                value={filas.num_estudiantes} fullWidth id="outlined-basic" label="Estudiantes" variant="outlined" />
                        </Grid>
                        <Grid item sm={12}  xs={12} padding={1}   >
                            <TextField name='tema_dictado' onChange={handleChange} value={filas.tema_dictado} sx={input} fullWidth id="outlined-basic" label="Tema Dictado" variant="outlined" />
                        </Grid>

                        <Grid item sm={12}  xs={12} padding={1}     >
                            <TextField sx={input} multiline
                                onChange={handleChange}
                                rows={4} fullWidth name='observacion' value={filas.observacion} id="outlined-basic" label="Observaciones" variant="outlined" />
                        </Grid>



                        <Grid item sm={12}  xs={12}  style={{ textAlign: 'end', padding: '10px' }}>

                            <Button
                                variant="contained"
                                sx={button}
                                onClick={() => { setModal(false) }}
                            >
                                Cancelar
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                sx={button2}
                                onClick={editarRegistro}
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