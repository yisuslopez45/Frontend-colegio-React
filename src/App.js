
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AsignarDocente from "./components/AsignarDocente";
import CrearUsuario from "./components/CrearUsuario";

import { Login } from './components/Login';
import { Navbar } from './components/Navbar'
import Admin from "./components/Admin";
import InformeAdmin from "./components/InformeAdmin";
import CrearRegistro from "./components/CrearRegistro";
import EditarRegistro from "./components/EditarRegistro";
import Docente from "./components/Docente";

const App = () => {
  return <>

    <BrowserRouter>
      
      <Navbar/>

      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path='/Admin' element={<Admin />} />
        <Route path="/InformeAdmin" element={<InformeAdmin/>}/>
        <Route path="/CrearUsuario" element={<CrearUsuario/>}/>
        <Route path="/Semestre" element={<AsignarDocente/>}/>
        <Route path="/CrearRegistro" element={<CrearRegistro/>}/>
        <Route path="/EditarRegistro" element={<EditarRegistro/>}/>
        <Route path="/Docente" element={<Docente/>}/>
      
        
      </Routes>



    </BrowserRouter>


  </>
}

export default App;
