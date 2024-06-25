import Perfil from "./Componentes/Perfil";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav>
      <Link href="Pagina1">Pagina1</Link>
      <Link href="Pagina2">Calculadora</Link>
      </nav>
    <Perfil nombre="Pablo" apellido="Marmol" edad={30} rol="Docente"/>
    <Perfil nombre="Jose" apellido="Perez" edad={15} rol="Estudiante"/>
    </>
  );
}