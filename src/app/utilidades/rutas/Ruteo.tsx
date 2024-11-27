import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { Acerca } from "../../componentes/otros/Acerca";
import { Cliente } from "../../componentes/otros/Cliente";
import { Producto } from "../../componentes/propiedades/Producto";
import { Funcionamiento } from "../../componentes/propiedades/Funcionamiento";
import { SolucionesComunidad } from "../../componentes/propiedades/SolComunidad";
import { Contacto } from "../../componentes/otros/Contacto";

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={< Inicio/>} />

            <Route path="/clie" element={< Cliente/>} />

            <Route path="/prod" element={< Producto/>} />
            <Route path="/func" element={< Funcionamiento/>} />
            <Route path="/solc" element={< SolucionesComunidad/>} />

            <Route path="/cont" element={< Contacto/>} />

            <Route path="/acer" element={< Acerca/>}/>

            <Route path="*" element={<NoEncontrado/>}/>
        </Routes>
    )
}