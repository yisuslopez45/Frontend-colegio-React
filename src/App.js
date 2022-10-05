
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CrearUsuario from "./components/CrearUsuario";

import { Login } from './components/Login';
import { Navbar } from './components/Navbar'
import PagosDocente from "./components/PagosDocente";

const App = () => {
  return <>

    <BrowserRouter>
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/AdminDocente' element={<Navbar />} />
        <Route path="/PagoDocente" element={<PagosDocente/>}/>
        <Route path="/CrearUsuario" element={<CrearUsuario/>}/>
        
      </Routes>



    </BrowserRouter>


  </>
}

export default App;
