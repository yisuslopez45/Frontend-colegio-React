import { AppBar, Button, Grid, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import DrawerComponent from './DrawerComponent'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { cerrarLogin } from '../redux/action/LoginAction';

const button = {

  width: "125px",
  marginLeft: "10px",

  '&: focus': {
    color: "#000000",
    borderBottom: ' 3px solid #ED7179'

  },

  '&:hover': {
    color: "#000000",
    background: "#A4D4C1"
  }
}


export const Navbar = () => {

  const { rol } = useSelector(state => state.login)
  const dispatch = useDispatch()

  const limpiarRedux = ()=>{
    dispatch(cerrarLogin())
  }

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
                {
                  rol === 2 && (
                    <Link to="/Admin" style={{ textDecoration: "none" }} >
                      <Typography variant='normal' style={{ color: "white" }} >
                        ADMINISTRADOR
                      </Typography>

                    </Link>
                  )
                }

                {
                  rol === 1 && (
                    <Link to="/Docente" style={{ textDecoration: "none" }} >
                      <Typography variant='normal' style={{ color: "white" }} >
                        DOCENTE
                      </Typography>

                    </Link>
                  )
                }



                <Tabs sx={{ marginLeft: 'auto' }} style={{ alignItems: "center" }} >


                  {rol === 2 && (
                    <>
                      {/* <Link to="/Admin" style={{ textDecoration: "none" }}>
                        <Button sx={button} style={{ color: "white" }} variant="text">Admin</Button>
                      </Link> */}

                      <Link to="/InformeAdmin" style={{ textDecoration: "none" }}>
                        <Button sx={button} style={{ color: "white" }} variant="text">Informe</Button>
                      </Link>

                      <Link to="/CrearUsuario" style={{ textDecoration: "none" }}>
                        <Button sx={button} style={{ color: "white" }} variant="text">Crear Usuario</Button>
                      </Link>

                      <Link to="/Semestre" style={{ textDecoration: "none" }} >
                        <Button sx={button} style={{ color: "white" }} variant="text"> Semestre</Button>
                      </Link>

                      <Link to="/Login" style={{ textDecoration: "none" }} >
                          <Button sx={button} style={{ color: "white" }} variant="text" onClick={limpiarRedux} startIcon={<AccountCircleIcon/>} >Cerrar</Button>
                        </Link>
                    </>

                  )

                  }

                  {

                    rol === 1 && (
                      <>
                

                        <Link to="/CrearRegistro" style={{ textDecoration: "none" }} >
                          <Button sx={button} style={{ color: "white" }} variant="text"> Registro</Button>
                        </Link>

                        <Link to="/EditarRegistro" style={{ textDecoration: "none" }} >
                          <Button sx={button} style={{ color: "white" }} variant="text">Editar</Button>
                        </Link>

                        <Link to="/Login" style={{ textDecoration: "none" }} >
                          <Button sx={button} style={{ color: "white" }} variant="text" onClick={limpiarRedux} startIcon={<AccountCircleIcon/>} >Cerrar</Button>
                        </Link>

                      </>
                    )
                  }






                </Tabs>


              </>

            )

          }


        </Toolbar>



      </AppBar>


    </Grid>
  )
}

