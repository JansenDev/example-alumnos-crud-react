import React, { useState, useEffect } from "react";
import { dataAlumno } from "../../utils/dataAlumno";
import ListarAlumnno from "./ListarAlumnno";

function Alumno() {
  const [isOpenBtnNuevo, setIsOpenBtnNuevo] = useState(false);
  const [listaAlumnos, setListaAlumnos] = useState([]);

  const [state, setState] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    dni: "",
    edad: "",
    carrera_id: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  useEffect(() => {
    console.log(state);
    setListaAlumnos(dataAlumno);
  }, [state]);

  return (
    <>
      <br />
      <div className="text-center">
        <h2>Gestionar Alumnos</h2>
      </div>
      <div className="d-flex justify-content-between">
        <h3>Listado de Alumnos</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            setIsOpenBtnNuevo(!isOpenBtnNuevo);
          }}
        >
          Nuevo
        </button>
      </div>

      <hr />
      {isOpenBtnNuevo && (
        <div className="d-flex justify-content-center ">
          <table>
            <tbody>
              <tr className="text-end">
                <th scope="col">Nombres:</th>
                <td scope="col">
                  <input
                    className="form-control"
                    name="nombres"
                    placeholder="Nombres"
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr className="text-end">
                <th scope="col">Apellidos:</th>
                <td scope="col">
                  <input
                    className="form-control"
                    name="apellidos"
                    placeholder="Apellidos"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="text-end">
                <th className="text-end" scope="col">
                  Email:
                </th>
                <td scope="col">
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="text-end">
                <th scope="col">Telefono:</th>
                <td scope="col">
                  <input
                    className="form-control"
                    name="telefono"
                    placeholder="Telefono"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="text-end">
                <th scope="col">DNI:</th>
                <td scope="col">
                  <input
                    className="form-control"
                    name="dni"
                    placeholder="Dni"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="text-end">
                <th scope="col">Edad:</th>
                <td scope="col">
                  <input
                    className="form-control"
                    name="edad"
                    placeholder="Edad"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="text-end">
                <th scope="col">Carrera_id:</th>
                <td scope="col">
                  <input
                    className="form-control"
                    name="carrera_id"
                    placeholder="Carrera_id"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="text-center">
                <td colSpan="2">
                  <button
                    onClick={() => setIsOpenBtnNuevo(false)}
                    className="btn btn-secondary mt-3"
                  >
                    Cerrar
                  </button>{" "}
                  <button className="btn btn-success  mt-3">Crear</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <br />
      <ListarAlumnno dataAlumno={listaAlumnos} />
      <br />
    </>
  );
}

export default Alumno;
