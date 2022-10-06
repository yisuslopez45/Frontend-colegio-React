import { AppBar, Button, Grid, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import DrawerComponent from './DrawerComponent'


const button = {

  width: "120px",
  marginLeft:"10px",

  '&: focus': {
    color: "#000000",
    borderBottom :' 3px solid #ED7179'

  },

'&:hover': {
  color: "#000000",
  background: "#A4D4C1"
}
}


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


                <Tabs sx={{ marginLeft: 'auto' }} style={{ alignItems: "center" }} >

                  <Link to="/Admin" style={{ textDecoration: "none" }}>
                    <Button sx={button} style={{ color: "white" }} variant="text">Admin</Button>
                  </Link>

                  <Link to="/InformeAdmin" style={{ textDecoration: "none" }}>
                    <Button sx={button} style={{ color: "white" }} variant="text">Informe</Button>
                  </Link>

                  <Link to="/CrearUsuario" style={{ textDecoration: "none" }}>
                    <Button sx={button}  style={{ color: "white" }} variant="text">Crear Usuario</Button>
                  </Link>

                  <Link to="/Semestre" style={{ textDecoration: "none" }} >
                    <Button sx={button}  style={{ color: "white" }} variant="text"> Semestre</Button>
                  </Link>

                  <Link to="/CrearRegistro" style={{ textDecoration: "none" }} >
                    <Button sx={button}  style={{ color: "white" }} variant="text"> Registro</Button>
                  </Link>

                  <Link to="/EditarRegistro" style={{ textDecoration: "none" }} >
                    <Button sx={button}  style={{ color: "white" }} variant="text">Editar</Button>
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

