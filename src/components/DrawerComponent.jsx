import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, {Fragment, useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';


const DrawerComponent = () => {

    const [openDrawer, setOpendrawe] = useState(false)

  return (
    <Fragment>
        <Drawer open={openDrawer} onClose={()=>{setOpendrawe(false)}}>
        
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Docentes</ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Horarios</ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Asignaturas</ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>Pagos</ListItemText>
                    </ListItemIcon>
                </ListItemButton>


            </List>

        </Drawer>

        <IconButton sx={{ color:'white' , marginLeft:'auto'}} onClick={()=> setOpendrawe(!openDrawer)}>
            <MenuIcon/> 
        </IconButton>

    </Fragment>
  )
}

export default DrawerComponent