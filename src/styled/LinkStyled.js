
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BotonStyle = styled(Button)`

    padding : 12px 50px;
   
    &:focus {
        color: "#000000";
        border-bottom : 3px solid #ED7179;
       
    }
    
    &:hover {
        color: "#000000";
        background: "#ED7179";
    }
`

export const DivStyle = styled.div`

    color: "#FFFFFF";
    background: "#9DB3E2";

    &:focus {
        color: "#000000";
        border-bottom : 3px solid #9C27B0;
       
    }
    
    &:hover {
        color: "#000000";
        background: "#9DB3E2";
    }
`


