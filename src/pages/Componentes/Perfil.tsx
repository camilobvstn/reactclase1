import React from 'react'
interface Props{
    nombre:string,
    apellido:string,
    edad:number
    rol?:"Estudiante"|"Docente" 
}

export const Perfil = (props:Props) => {
  return (
    <>
        <h1>Perfil</h1>
      <p>Nombre: {props.nombre}</p>
      <p>Apellido: {props.apellido}</p>
      <p>Edad: {props.edad}</p>
      {props.edad > 18 && <p>Si es mayor de edad</p>}
      {props.rol!=undefined && 
        <p>Eres:{props.rol}</p>&&
        props.rol=="Docente" &&
        <ul>
            <li>Subir Notas</li>
            <li>Reprobar Alumnos</li>
            <li>Aprobar Alumnos</li>
        </ul>
        }
    </>
  )
}

export default Perfil

