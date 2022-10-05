import { AppBar, Button, Grid, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { BotonStyle } from '../styled/LinkStyled'
import DrawerComponent from './DrawerComponent'



export const Navbar = () => {



  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))


  return (
    <Grid>
      <AppBar sx={{ background: "#77BFA3" }} >
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          )
            :
            (
              <>
                <Typography variant='normal' >
                  Administrador
                </Typography>


                <Tabs sx={{ marginLeft: 'auto' }} style={{ alignItems:"center"}} >

                  <Link to="/PagoDocente" style={{ textDecoration: "none" }}>
                    <BotonStyle style={{color:"white" }} variant="text">Docente</BotonStyle>
                  </Link>

                  <Link to="/" style={{ textDecoration: "none" }}>
                    <BotonStyle style={{color:"white"}} variant="text">Horarios</BotonStyle>
                  </Link>

                  <Link to="/CrearUsuario" style={{ textDecoration: "none" }}>
                    <BotonStyle style={{color:"white"}} variant="text">Crear Usuario</BotonStyle>
                  </Link>

                  <Link to="/PagoDocente" style={{ textDecoration: "none" }} >
                    <BotonStyle style={{color:"white"}} variant="text"> Semestre</BotonStyle>
                  </Link>



                </Tabs>


              </>

            )

          }


        </Toolbar>



      </AppBar>


    </Grid>
  )
}

