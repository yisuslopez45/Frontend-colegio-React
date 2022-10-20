
import { Button, CardMedia, Grid, IconButton, keyframes, Paper, Typography } from '@mui/material'
import imagen1 from '../img/Designer.png'
import imagen2 from '../img/Data.png'
import imagen3 from '../img/online.png'
import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const estilo = {
  display: "flex",
  alignItems: "center"
}


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




const Admin = () => {


  return (



    <Grid container direction="column" >


      <Grid item style={{ backgroundColor: "white" }} paddingTop={20} paddingBottom={15} >

        <Grid container direction="row" alignItems="center" justifyContent='center' >

          <Grid container border={1} sx={useStyle} marginTop={2} md={3} xs={6}  >

            <Typography style={{ fontSize: "30px", fontWeight: "bold", color: "#2D3142" }}>
             Informe
            </Typography>
            <CardMedia
              component="img"
              src={imagen1}
              alt="green"
              height="350px"
              width="300px"

            />
              <Link to="/InformeAdmin" style={{ textDecoration: "none" }}>
              <Button sx={button} variant="contained">Ver</Button>
            </Link>
            


          </Grid>





          <Grid container border={1} sx={useStyle} marginLeft={2} marginTop={2} md={3} xs={6}>
            <Typography style={{ fontSize: "30px", fontWeight: "bold", color: "#2D3142" }}>
            Crear Usuario
            </Typography>

            <CardMedia
              component="img"
              src={imagen2}
              alt="green"
              height="350px"
              width="300px"

            />
             <Link to="/CrearUsuario" style={{ textDecoration: "none" }}>
             <Button size="large" sx={button} variant="contained">Crear</Button>
            </Link>
           

          </Grid>


          <Grid container border={1} sx={useStyle} marginLeft={2} marginTop={2} md={3} xs={6} >

            <Typography style={{ fontSize: "30px", fontWeight: "bold", color: "#2D3142" }}>
              Semestre
            </Typography>

            <CardMedia
              component="img"
              src={imagen3}
              alt="green"
              height="350px"
              width="300px"

            />

            <Link to="/Semestre" style={{ textDecoration: "none" }}>
            <Button size="large" sx={button} variant="contained">Agendar</Button>
            </Link>
            
          </Grid>

        </Grid>

      </Grid>



      <Footer></Footer>


    </Grid>




  )
}

export default Admin