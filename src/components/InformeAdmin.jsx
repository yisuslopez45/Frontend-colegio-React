
import { Grid, Typography } from '@mui/material'

// import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import imagenSend from '../img/Checklist_Two Color.svg'
import Footer from './Footer'

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

const InformeAdmin = () => {




    const columns = [

        {
            field: 'nombreDocente',
            headerName: 'Nombre del docente',
            flex:1
        },
        
        {
            field: "cedula",
            headerName: 'Cedula',
           flex:1
          
        },

        {
            field: "asignatura",
            headerName: 'Asignatura',
           flex:1
          
        },
        {
            field: "horastrabajadas",
            headerName: 'Horas Trabajadas',
           flex:1
          

        },
        
         
        {
            field: 'horasfaltantes',
            headerName: 'Horas Faltantes',
           flex:1
        },
        
        {
            field: 'sueldo',
            headerName: 'sueldo',
           flex:1
        
        },
        
        
    ];

    const rows = [
        {   nombreDocente: 'Snow', cedula: '122', asignatura: 35 , horastrabajadas : 45 , horasfaltantes : 5 , sueldo: 58  }
      ];



    return (

        <Grid container direction="column" >

            <Grid container style={{ backgroundColor: "white" }} alignItems="center" justifyContent='center' paddingTop={10} paddingBottom={15} >

                <Grid item style={{ width: "1200px" }} >

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



            <Footer></Footer>


        </Grid>
    )
}

export default InformeAdmin