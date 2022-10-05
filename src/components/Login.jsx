import { Button, Card, CardMedia, FormControl, Grid, IconButton, Link, Paper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';

//ICON
import logo from '../img/lunch.svg';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { loginIniciar } from '../redux/action/LoginAction';

export const Login = () => {

  const dispatch = useDispatch();

  
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  const data = {
    correo: "davidlopez@gmail.com",
    password: "12343"
  }

  return (
    <Grid container direction='row' justifyContent='center' marginTop={isMatch ? 10 : 25} alignItems='center' >



    

      {/* <Grid item md={6} sx={12}   style={{backgroundColor:"#2356BF", borderRadius: " 20px 0px 0px 20px"  }}  >
   
        <Grid container justifyContent='center' alignItems='center' style={{ height: "800px" }} >

          <Grid item  sx={12} height="600px" >
          <CardMedia
            component="img"
            src={logo}
            alt="green"
            height="100%"
            width="100%"

          />
          </Grid>

        </Grid>



      </Grid> */}

      <Grid item md={6} sx={12}  style={{backgroundColor:"#77bfa3" ,  borderRadius:"20px 20px 20px 20px"}} >


        <Grid container justifyContent='center' alignItems='center' style={{ height: "800px" }} >

          <Paper elevation={isMatch ? 5 : 4}  >

          <Grid item  sx={12} md={12} height="600px" padding={10} >
           
            <FormControl fullWidth variant="outlined" style={{ alignItems: 'center' }}>

              <Typography
                variant='h4'
              >
                Bienvenido
              </Typography>

              <TextField style={{ marginTop: '20px', width: '400px' }}
                type='email'
                id="outlined-basic"
                label="Correo"
                variant="outlined"
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
                style={{ marginTop: '10px', width: '400px' }}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
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




              <Button style={{ marginTop: '60px', width: '400px', backgroundColor: '#2D3142' }}
                variant="contained"
                onClick={() => {
                  console.log(data)
                  dispatch(loginIniciar(data))
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

          </Paper>

        </Grid>



      </Grid>



    </Grid>
  )
}
