
import { Button, CardMedia, Grid, IconButton, keyframes, Paper, Typography } from '@mui/material'
import imagen1 from '../img/icons_docente1.svg'
import imagen2 from '../img/Data.png'
import imagen3 from '../img/icons_docente2.svg'
import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'





const button = {
    backgroundColor: "#2d3142",
    width: "130px",
    height: "50px",
    '&:hover': {
        backgroundColor: "#2d3142",
        transition: 'all 0.2s ease-in',
        width: "135px",
        height: "55px"
    }
}

const useStyle = {
    backgroundColor: "#77BFA3",
    height: "500px",
    width: "400px",
    alignItems: "center",
    justifyContent: 'center',
    color: "#FFFFFF",
    borderRadius: "20px 20px 20px 20px",
    '&:hover': {
        transition: 'all 0.5s ease-in',
        transform: 'scale(1.03)'
    },

}




const Docente = () => {


    return (



        <Grid container direction="column" >


            <Grid item style={{ backgroundColor: "white" }} paddingTop={20} paddingBottom={15} >

                <Grid container direction="row" alignItems="center" justifyContent='center' >

                    <Grid container border={1} sx={useStyle} marginTop={2} xl={3} lg={4} md={4} sm={9} xs={9}  >

                        <Typography style={{ fontSize: "30px", fontWeight: "bold", color: "#2D3142" }}>
                            Registro Asistencia
                        </Typography>

                        <CardMedia
                            component="img"
                            src={imagen1}
                            alt="green"
                            height="300px"
                            width="300px"
                        />

                        <Link to="/CrearRegistro" style={{ textDecoration: "none" }}>
                            <Button size="large" sx={button} variant="contained">Crear</Button>
                        </Link>


                    </Grid>



                    <Grid container sx={useStyle} marginLeft={2} marginTop={2} xl={3} lg={4} md={4} sm={9} xs={9} >

                        <Typography style={{ fontSize: "30px", fontWeight: "bold", color: "#2D3142" }}>
                            Editar Registro
                        </Typography>

                        <CardMedia
                            component="img"
                            src={imagen3}
                            alt="green"
                            height="350px"
                            width="300px"

                        />

                        <Link to="/EditarRegistro" style={{ textDecoration: "none" }}>
                            <Button size="large" sx={button} variant="contained">Editar</Button>
                        </Link>
                    </Grid>

                </Grid>

            </Grid>



            <Footer></Footer>


        </Grid>




    )
}

export default Docente