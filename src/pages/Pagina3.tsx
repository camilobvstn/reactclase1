import React,{useState} from 'react'
import  Form  from 'react-bootstrap/Form'
//import  {Form}  from 'react-bootstrap'
import { Button } from 'react-bootstrap';

interface Persona{
    nombre:string
    apellido:string
    correo:string
    rut:string
    fechanacimiento:string
    edad:number
}

const initialState:Persona={
    apellido:"",
    nombre:"",
    edad:0,
    correo:"",
    fechanacimiento:"",
    rut:""
}



const pagina3 = () => {
    const [persona, setPersona] = useState<Persona>(initialState)
    const handlePersona = (name:string, value:string)=>{
        setPersona({...persona,[name]:value})
    
    }
  return (
    <>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type='text'
            placeholder='Ingrese un nombre'
            onChange={(e) => (handlePersona(e.currentTarget.name,e.currentTarget.value))}
            name='nombre'></Form.Control>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido:</Form.Label>
            <Form.Control type='text' placeholder='Ingrese un apellido'
            onChange={(e) => (handlePersona(e.currentTarget.name,e.currentTarget.value))}
            name='apellido'></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicCorreo'>
            <Form.Label>Correo:</Form.Label>
            <Form.Control type='text' placeholder='Ingrese un correo'
            onChange={(e) => (handlePersona(e.currentTarget.name,e.currentTarget.value))}
            name='correo'></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicFecha'>
            <Form.Label>Fecha de nacimiento:</Form.Label>
            <Form.Control type='text' placeholder='Ingrese una fecha'
            onChange={(e) => (handlePersona(e.currentTarget.name,e.currentTarget.value))}
            name='fechanacimiento'></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEdad'>
            <Form.Label>Edad:</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su edad'
            onChange={(e) => (handlePersona(e.currentTarget.name,e.currentTarget.value))}
            name='edad'></Form.Control>
        </Form.Group>
        
        <Form.Group className='mb-3' controlId='formBasicRut'>
            <Form.Label>Rut:</Form.Label>
            <Form.Control type='text' placeholder='Ingrese su rut'
            onChange={(e) => (handlePersona(e.currentTarget.name,e.currentTarget.value))}
            name='rut'></Form.Control>
        </Form.Group>

        <Button variant='success' type='button'>Registrar</Button>
    </Form>
    </>
  )
}

export default pagina3
