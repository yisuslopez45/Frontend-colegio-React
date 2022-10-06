
import { Button, Grid, Tooltip, Typography } from '@mui/material'

// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'
import imagenSend from '../img/Checklist_Two Color.svg'
import Footer from './Footer'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import EditarRegistroDialog from './Dialog/EditarRegistroDialog';


const table = {

    '& .MuiDataGrid-columnHeaderTitleContainer ':{
        backgroundColor:"#77BFA3",
        justifyContent:"center"
    },

    '&  .MuiDataGrid-columnSeparator':{
        backgroundColor:"#77BFA3"
    },

    '& .MuiDataGrid-menuIcon':{
        backgroundColor:"#77BFA3"
    },

    '& .MuiDataGrid-columnHeader':{
        padding:"0px"
    },

    '& .MuiDataGrid-cell ':{
        justifyContent:"center"
    }

}

const EditarRegistro = () => {

    const [modal, setModal] = useState(false)


    const columns = [

        {
            field: 'nombreDocente',
            headerName: 'Asignatura Dictada',
            flex:1
        },
        
        {
            field: "cedula",
            headerName: 'Horas Dictadas',
           flex:1
          
        },

        {
            field: "asignatura",
            headerName: 'Tema dictado',
           flex:1
          
        },
        {
            field: "horastrabajadas",
            headerName: 'Numero de estudiantes',
           flex:1
          

        },
        
         
        {
            field: 'horasfaltantes',
            headerName: 'Observación',
           flex:1
        },
        

        {
            field: 'actions',
            headerName: 'Acciones',
            flex: 1,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <strong>
                 
                    <Tooltip title='Cambiar Estado' arrow>
                        <Button
                        onClick={()=>{setModal(true)}}

                        >
                            <ChangeCircleIcon />

                        </Button>

                    </Tooltip>
                </strong>
            )
        },

        
        
    ];

    const rows = [
        {   nombreDocente: 'Snow', cedula: '122', asignatura: 35 , horastrabajadas : 45 , horasfaltantes : 5 , sueldo: 58  }
      ];



    return (

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={10} paddingBottom={15} >

                <Grid item style={{ width: "1400px" }} >

                    <Grid container direction="row" alignItems="center" justifyContent='center' marginTop={5} padding={5}>
                        <Grid item lg={12} padding={1} textAlign="center" paddingBottom={5}  >
                            <Typography style={{ fontSize: "25px", fontWeight: "bold" }} >
                                Programación Semestre
                            </Typography>
                        </Grid>
                        <Grid item lg={12} padding={1}     >

                        <div style={{ height: 400, width: '100%' }}>

                            <DataGrid
                                rows={rows}
                                columns={columns} 
                                sx={table}
                                style={{  fontSize: "15px", fontWeight: "bold"}}
                                pageSize={5}
                              
                                getRowId={(row) => row.cedula}
                                  
                            />

                        </div>
                        </Grid>




                    </Grid>



                </Grid>

            </Grid>

            {
                modal && (
                    <EditarRegistroDialog modal={modal} setModal={setModal}></EditarRegistroDialog>
                )
            }



            <Footer></Footer>


        </Grid>
    )
}

export default EditarRegistro