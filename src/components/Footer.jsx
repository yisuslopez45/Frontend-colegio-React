import React from 'react'
import iconFacebook from '../img/icons8-facebook.svg'
import iconInstagram from '../img/icons8-instagram.svg'
import iconLinkedin from '../img/icons8-linkedin-rodeado.png'
import iconCasa from '../img/icons8-casa.svg'
import iconTelefono from '../img/icons8-telefono-de-oficina-36.png'
import { CardMedia, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'



const icon = {
  width: "50px",
  height: "50px",
  color: "#38529A"
}

const Footer = () => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid item style={{ backgroundColor: "#77BFA3" }} >

      <Grid container direction="row" alignContent="center" justifyContent="center" marginTop={5}  >

        <Grid item xs={12} md={5} lg={5}   >
          <Typography style={{ fontSize: "25px", fontWeight: "bold" }} marginLeft={8}>
            Mas información del proyecto
          </Typography>
          <Typography style={{ fontSize: "20px" }} textAlign="justify" paddingLeft={8} paddingRight={6} marginTop={3}>
            Este es un proyecto desarrollado por estudiante
            de sistemas de información de la universidad del
            Valle sede norte del Cauca para la asignatura de
            Sistemas de información I, usamos una librería de
            JS como React
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} lg={4}  marginTop={isMatch ? "15px" : "0px"} >
          <Typography style={{ fontSize: "25px", fontWeight: "bold" }} marginLeft={8}>
            Redes Sociales
          </Typography>
          <Grid container direction="row" paddingLeft={8} marginTop={3}>

            <Grid item xl={1} lg={2} md={2} sm={1} xs={2} >
              <CardMedia
                component="img"
                src={iconFacebook}
                alt="green"
                sx={icon}
              />
            </Grid>

            <Grid container  xl={11} lg={10} md={10} sm={11} xs={10} alignItems="center"  >
              <Typography style={{ fontSize: "20px", paddingLeft:"10px" }} >
                @GrupoDev5
              </Typography>
            </Grid>


            <Grid item xl={1} lg={2} md={2} sm={1} xs={2}>
              <CardMedia
                component="img"
                src={iconInstagram}
                alt="green"
                sx={icon}
              />
            </Grid>

            <Grid container xl={11} lg={10}  md={10} sm={11} xs={10} alignItems="center"  >
              <Typography style={{ fontSize: "20px", paddingLeft:"10px" }} >
                @GrupoDev5
              </Typography>
            </Grid>

            <Grid item xl={1} lg={2} md={2} sm={1} xs={2} >
              <CardMedia
                component="img"
                src={iconLinkedin}
                alt="green"
                sx={icon}
              />
            </Grid>

            <Grid container xl={11} lg={10} md={10} sm={11} xs={10} alignItems="center"  >
              <Typography style={{ fontSize: "20px", paddingLeft:"10px" }} >
                @GrupoDev5
              </Typography>
            </Grid>

          </Grid>

        </Grid >

        <Grid item xs={12} md={3} lg={3}  marginTop={isMatch ? "15px" : "0px"}   >
          <Typography style={{ fontSize: "25px", fontWeight: "bold" }} marginLeft={8}>
            Información de contacto
          </Typography>

          <Grid container direction="row" paddingLeft={8} marginTop={3} >

            <Grid item  lg={2} md={3} sm={1} xs={2}  >
              <CardMedia
                component="img"
                src={iconCasa}
                alt="green"
                sx={icon}
              />
            </Grid>

            <Grid container lg={10} md={12} sm={11} xs={10} alignItems="center"   >
              <Typography style={{ fontSize: "20px", paddingLeft:"10px" }}  >
                Santander de Quilichao, Cauca , Colombia
              </Typography>
            </Grid>


            <Grid item   lg={2} md={3} sm={1} xs={2} >
              <CardMedia
                component="img"
                src={iconTelefono}
                alt="green"
                sx={icon}
              />
            </Grid>

            <Grid container lg={10} md={12} sm={11} xs={10} alignItems="center" >
              <Typography style={{ fontSize: "20px",  paddingLeft:"10px" }}   >
                +57 3127308812
              </Typography>
            </Grid>



          </Grid>


        </Grid>

        <Grid item md={12}  >
          <Typography style={{ fontSize: "20px", textAlign: "center" }} marginTop={5}>
            © Todos los derechos reservados
          </Typography>

        </Grid>
      </Grid>
    </Grid>

  )
}

export default Footer