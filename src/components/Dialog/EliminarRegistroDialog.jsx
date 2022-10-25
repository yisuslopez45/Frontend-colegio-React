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
    backgroundColor: "#D62828",
    width: "110px",
    height: "50px",
    color: "#FFFFFF",
    '&:hover': {
        backgroundColor: "#8E1A1A",
        transition: 'all 0.2s ease-in'
    }

}



const EliminarRegistroDialog = ({ setModal, setNotificacion, setBandera, bandera, modal, filas, setFilas }) => {


    const queryDelete = async () => {

        try {
            //axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + userT?.jwt
            const { data } = await axiosClient.delete(`/eliminarRegistro/${filas.id_registro}`);


            console.log(data)

            if (data.code === 1) {
                setBandera(bandera + 1)
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
        queryDelete()
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
                        Eliminar Registro
                    </Typography>
                </Paper>
                <Grid item marginTop={3} marginBottom={3} >

                    <Grid container direction="row" alignItems="center" justifyContent='center' >

                        <Grid item xs={12} sm={6} style={{ textAlign: 'center', padding: '10px' }}>

                            <Button
                                variant="contained"
                                sx={button}
                                onClick={() => { setModal(false) }}
                            >
                                Cancelar
                            </Button>

                        
                        </Grid>

                        <Grid item xs={12} sm={6} style={{ textAlign: 'center', padding: '10px' }}>

                            <Button
                                variant="contained"
                                color="primary"
                                sx={button2}
                                onClick={editarRegistro}
                            >
                                Eliminar
                            </Button>
                        </Grid>


                    </Grid>

                </Grid>

            </DialogContent>
        </Dialog >
    )
}

export default EliminarRegistroDialog