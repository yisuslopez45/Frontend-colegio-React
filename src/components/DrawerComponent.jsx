import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { Fragment, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cerrarLogin } from '../redux/action/LoginAction';


const DrawerComponent = () => {

    const [openDrawer, setOpendrawe] = useState(false)
    const { rol } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const limpiarRedux = ()=>{
        dispatch(cerrarLogin())
      }

    return (
        <Fragment>
            <Drawer open={openDrawer} onClose={() => { setOpendrawe(false) }}>



                {rol === 1 && (
                    <List>

                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/CrearRegistro" style={{ textDecoration: "none" }}>
                                    <ListItemText>Registro</ListItemText>
                                </Link>

                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/EditarRegistro" style={{ textDecoration: "none" }}>
                                    <ListItemText>Editar</ListItemText>
                                </Link>

                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/Login" style={{ textDecoration: "none" }}>
                                    <ListItemText onClick={limpiarRedux}>Cerrar</ListItemText>
                                </Link>

                            </ListItemIcon>
                        </ListItemButton>


                    </List>

                )}

                {rol === 2 && (
                    <List>

                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/InformeAdmin" style={{ textDecoration: "none" }}>
                                    <ListItemText>Informe</ListItemText>
                                </Link>

                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/CrearUsuario" style={{ textDecoration: "none" }}>
                                    <ListItemText>Crear Usuario</ListItemText>
                                </Link>

                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/Semestre" style={{ textDecoration: "none" }}>
                                    <ListItemText>Semestre</ListItemText>
                                </Link>

                            </ListItemIcon>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <Link to="/Login" style={{ textDecoration: "none" }}>
                                    <ListItemText  onClick={limpiarRedux} >Cerrar</ListItemText>
                                </Link>

                            </ListItemIcon>
                        </ListItemButton>


                    </List>

                )}



            </Drawer>

            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpendrawe(!openDrawer)}>
                <MenuIcon />
            </IconButton>

        </Fragment>
    )
}

export default DrawerComponent