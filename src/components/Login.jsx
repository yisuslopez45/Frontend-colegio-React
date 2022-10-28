import { Alert, AlertTitle, Button, Card, CardMedia, CircularProgress, FormControl, Grid, IconButton, Link, Paper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { green } from '@mui/material/colors';

//ICON
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { loginIniciar } from '../redux/action/LoginAction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import { useSnackbar } from 'notistack';



export const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [loading2, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const theme = useTheme();

  const buttonSx = {

    bgcolor :'#2D3142',
    '&:hover': {
      bgcolor: "#2D3142",
    },

    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: "#AAAAAA",
      },
    }),
  };

  const { code, message, rol , loading } = useSelector(state => state.login)
  const [dataLogin, setDataLogin] = useState({
    correo: "",
    password: ""
  })

  
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
  
  const handleButtonClick = () => {
    
    dispatch(loginIniciar(dataLogin))
    
    if (!loading2) {
      setSuccess(false);
      setLoading(true);
    }
  };
  
  useEffect(()=>{

    if(code === "1" ){
      setSuccess(true);
      setLoading(false);
      enqueueSnackbar(message, { variant: 'success' })
    }

     if(code === -1 ){
      setLoading(false);
      enqueueSnackbar(message, { variant: 'error' })
    }
  },[code ])



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



          <Box sx={{ m: 1, position: 'relative' , width:"100%"}}  >

            <Button 
              fullWidth
              variant="contained"
              sx={buttonSx}
              disabled={loading2}
              onClick={handleButtonClick}

            >Ingresar
            </Button>


            {loading2 && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>

          {/* <Button style={{ marginTop: '60px', backgroundColor: '#2D3142' }}
            fullWidth
            variant="contained"
            onClick={() => {
              dispatch(loginIniciar(dataLogin))
            }}
          >Login
          </Button> */}

          <Link
            marginTop='100px'
          >
            {' No tienes cuenta ?  Registrarse'}

          </Link>



        </FormControl>


      </Grid>

  
    </Grid>
  )
}
