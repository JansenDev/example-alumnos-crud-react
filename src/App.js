import React from "react";
//import NotasPorAnio from './Componentes/NotasPorAnio'
import PagosPorSemestre from "./Componentes/PagosPorSemestre";
import Alumno from "./components/Alumno/Alumno";
import ListarAlumnno from "./components/Alumno/ListarAlumnno";
import { dataAlumno } from "./utils/dataAlumno";

function App() {
  return (
    <div className="container mt-3">
      <Alumno />
    </div>
  );
}

export default App;
