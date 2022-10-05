import React from 'react'
import iconFacebook from '../img/icons8-facebook.svg'
import iconInstagram from '../img/icons8-instagram.svg'
import iconLinkedin from '../img/icons8-linkedin-rodeado.png'
import iconCasa from '../img/icons8-casa.svg'
import iconTelefono from '../img/icons8-telefono-de-oficina-36.png'
import { CardMedia, Grid, Typography } from '@mui/material'


const icon = {
    width: "50px",
    height: "50px",
    color: "#38529A"
  }

const Footer = () => {
  return (
    <Grid item style={{ backgroundColor: "#77BFA3" }} >
        
    <Grid container direction="row" alignContent="center" justifyContent="center" marginTop={5}  >
      <Grid item md={5} xs={12} >
        <Typography style={{ fontSize: "25px", fontWeight: "bold" }} marginLeft={10}>
          Mas información del proyecto
        </Typography>
        <Typography style={{ fontSize: "22px" }} paddingLeft={10} paddingRight={10} marginTop={5}>
          Este es un proyecto desarrollado por estudiante
          de sistemas de información de la universidad del
          Valle sede norte del Cauca para la asignatura de
          Sistemas de información I, usamos una librería de
          JS como React
        </Typography>
      </Grid>

      <Grid item md={3} xs={12} >
        <Typography style={{ fontSize: "25px", fontWeight: "bold" }} marginLeft={8}>
          Redes Sociales
        </Typography>
        <Grid container direction="row" paddingLeft={8} marginTop={5}>

          <Grid item md={1}  >
            <CardMedia
              component="img"
              src={iconFacebook}
              alt="green"
              sx={icon}
            />
          </Grid>

          <Grid container md={11}  alignItems="center"  >
            <Typography style={{ fontSize: "22px"  }} marginLeft={2} >
              Síguenos en Facebook
            </Typography>
          </Grid>


          <Grid item md={1}  >
            <CardMedia
              component="img"
              src={iconInstagram}
              alt="green"
              sx={icon}
            />
          </Grid>

          <Grid container md={11}  alignItems="center" >
            <Typography style={{ fontSize: "22px" }} marginLeft={2} >
            Síguenos en Instagram
            </Typography>
          </Grid>

          <Grid item md={1}  >
            <CardMedia
              component="img"
              src={iconLinkedin}
              alt="green"
              sx={icon}
            />
          </Grid>

          <Grid container md={11} alignItems="center" >
            <Typography style={{ fontSize: "22px" }}  marginLeft={2}>
            Síguenos en Linkedin
            </Typography>
          </Grid>

        </Grid>

      </Grid >

      <Grid item md={4}  xs={12} >
        <Typography style={{ fontSize: "25px", fontWeight: "bold" }} marginLeft={10}>
          Información de contacto
        </Typography>

        <Grid container direction="row" paddingLeft={10} marginTop={5}>

          <Grid item md={1}  >
            <CardMedia
              component="img"
              src={iconCasa}
              alt="green"
              sx={icon}
            />
          </Grid>

          <Grid container md={11}  alignItems="center"  >
            <Typography style={{ fontSize: "22px" }} marginLeft={2} >
              Santander de Quilichao, Cauca , Colombia
            </Typography>
          </Grid>


          <Grid item md={1}  >
            <CardMedia
              component="img"
              src={iconTelefono}
              alt="green"
              sx={icon}
            />
          </Grid>

          <Grid container md={11} alignItems="center" >
            <Typography style={{ fontSize: "22px" }} marginLeft={2}  >
              +57 3127308812
            </Typography>
          </Grid>

         

        </Grid>


      </Grid>

      <Grid item md={12}  >
        <Typography style={{ fontSize: "22px" , textAlign:"center"}} marginTop={5}>
          © Todos los derechos reservados
        </Typography>

      </Grid>
    </Grid>
  </Grid>

  )
}

export default Footer