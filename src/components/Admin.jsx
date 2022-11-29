
import { Button, CardMedia, Grid, IconButton, keyframes, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
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
  marginBottom : "10px",
  '&:hover': {
    backgroundColor: "#2d3142",
    transition: 'all 0.2s ease-in',
    width: "135px",
    height: "55px"
  }
}




const Admin = () => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
 

  const useStyle = {
    backgroundColor: "#77BFA3",
    height: "400px",
    width: "400px",
    alignItems: "center",
    justifyContent: 'center',
    color: "#FFFFFF",
    borderRadius: "20px 20px 20px 20px",
    '&:hover': {
      transition: 'all 0.5s ease-in',
      transform: 'scale(1.03)'
    },
    ...(isMatch && {
      height: "300px",
      width: "300px",
    }
    )

  }

  const styleimgcard = {
    height:"280px",
    width:"280px",
    ...(isMatch && {
      height: "200px",
      width: "260px",
    }
    ),
  
   
  }

  return (



    <Grid container direction="column" >


      <Grid item style={{ backgroundColor: "white" }} paddingTop={ isMatch ? 10 : 20} paddingBottom={ isMatch ? 10 : 15} >

        <Grid container direction="row" alignItems="center" justifyContent='center' >

          <Grid container sx={useStyle} marginTop={2} xl={2} lg={3} md={3.5} sm={4} xs={7}  >

            <Typography style={{ fontSize: "25px", fontWeight: "bold", color: "#2D3142" }}>
              Informe
            </Typography>
            <CardMedia
              component="img"
              src={imagen1}
              alt="green"
              sx={styleimgcard}

            />
            <Link to="/InformeAdmin" style={{ textDecoration: "none" }}>
              <Button sx={button} variant="contained">Ver</Button>
            </Link>



          </Grid>

          <Grid container sx={useStyle} marginLeft={2} xl={2} marginTop={2} lg={3} md={3.5} sm={4} xs={7}>
            <Typography style={{ fontSize: "25px", fontWeight: "bold", color: "#2D3142" }}>
              Crear Usuario
            </Typography>

            <CardMedia
              component="img"
              src={imagen2}
              alt="green"
              sx={styleimgcard}

            />
            <Link to="/CrearUsuario" style={{ textDecoration: "none" }}>
              <Button size="large" sx={button} variant="contained">Crear</Button>
            </Link>


          </Grid>


          <Grid container sx={useStyle} marginLeft={2} marginTop={2} xl={2} lg={3} md={3.5} sm={4} xs={7} >

            <Typography style={{ fontSize: "25px", fontWeight: "bold", color: "#2D3142" }}>
              Semestre
            </Typography>

            <CardMedia
              component="img"
              src={imagen3}
              alt="green"
              sx={styleimgcard}

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