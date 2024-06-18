import Perfil from "./Componentes/Perfil";

export default function Home() {
  return (
    <>
    <Perfil nombre="Pablo" apellido="Marmol" edad={30} rol="Docente"/>
    <Perfil nombre="Jose" apellido="Perez" edad={15} rol="Estudiante"/>
    </>
  );
}