import { Alert, AlertTitle, Button, Card, CardMedia, FormControl, Grid, IconButton, Link, Paper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


//ICON
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { loginIniciar } from '../redux/action/LoginAction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
  const { code, message, rol } = useSelector(state => state.login)
  const [dataLogin, setDataLogin] = useState({
    correo: "",
    password: ""
  })

  console.log(code)

  useEffect(() => {
    if (rol === 2) {
      return navigate("/Admin")
    }

    if (rol === 1) {
      return navigate("/Docente")
    }

  }, [rol, navigate]);

  const handleChange = (e) => {

    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value
    })
  }



  return (
    <Grid container direction='row' style={{ height: "100vh" }} justifyContent='center' alignItems='center' border={1} >



      <Grid container md={5} xs={9} sm={7} lg={5} xl={3} justifyContent='center' alignItems='center' style={{ backgroundColor: "#FFFFFF", borderRadius: "20px 20px 20px 20px" }}   >
        <FormControl variant="outlined" style={{ alignItems: 'center', width: "300px", padding: "20px" }}  >

          <Typography
            variant='h4'
          >
            Bienvenido
          </Typography>

          <TextField style={{ marginTop: '20px' }}
            type='email'
            id="outlined-basic"
            fullWidth
            name="correo"
            label="Correo"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <IconButton
                >
                  <AlternateEmailIcon />
                </IconButton>
              ),
            }}
          />

          <TextField
            style={{ marginTop: '10px' }}
            id="outlined-password-input"
            label="Password"
            fullWidth
            name='password'
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <IconButton
                >
                  <LockOpenIcon />
                </IconButton>
              ),
            }}

          />

          <Grid container
            marginTop={1}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"  >
            <Link
              variant='body1'
            >
              {' Recuperar Password'}
            </Link>
          </Grid>




          <Button style={{ marginTop: '60px', backgroundColor: '#2D3142' }}
            fullWidth
            variant="contained"
            onClick={() => {
              dispatch(loginIniciar(dataLogin))
            }}
          >Login
          </Button>

          <Link
            marginTop='100px'
          >
            {' No tienes cuenta ?  Registrarse'}

          </Link>



        </FormControl>

      </Grid>
      {code === 0 && (
        <Alert variant="filled" severity="success">
          This is a success alert — check it out!
        </Alert>
      )
      }





      {code === -1 && (
        <Alert variant="filled" severity="error">
          <AlertTitle>Error</AlertTitle>
          {message}
        </Alert>
      )
      }


    </Grid>
  )
}
