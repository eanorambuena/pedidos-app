import React from 'react'

import { OrderedList as Ol } from '@chakra-ui/react'

const SobreNosotros = () => {
  return (
    <>
        <header className = "container App-header">
            <h1>Sobre Nosotros</h1>
        </header>
        <section className  = "container">
            <ul className  = "container">
              <li> Lista de Tareas es una aplicación web que permite crear una lista de tareas y marcarlas como completadas o pendientes. </li>
              <li> Está desarrollada usando React, React Routes, React Forms, Chakra UI, Chakra UI Icons y Firebase</li>
            </ul>
            <h2 className = "App-subheader container">Funcionalidades</h2>
            <Ol mt={10}>
                <li>Crear una lista de tareas</li>
                <li>Marcar una tarea como completada o pendiente</li>
                <li>Eliminar una tarea</li>
                <li>Editar una tarea</li>
            </Ol>
        </section>
    </>
  )
}

export default SobreNosotros