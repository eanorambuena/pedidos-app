import { useCallback } from 'react';
import { useForm } from "react-hook-form";
import { ChakraProvider, Input, Divider, Textarea, Heading } from '@chakra-ui/react';

import useFirebase from '../hooks/useFirebase';
import Tarea from "./Tarea";
import useUser from '../hooks/useUser';

const ListaTareas = () => {
    const { storedList, addItem } = useFirebase("tareas");
    const { user } = useUser();

    const setTaskName = useCallback(
        (name, description) => {
            addItem({name, description, username: user.name, completed: false});
        }, [addItem, user.name]);

    const { register, handleSubmit } = useForm();

    const onSubmit = useCallback(
        (data) => {
            const taskName = data["taskName"];
            const taskDescription = data["taskDescription"];  
            setTaskName(taskName, taskDescription);
        },
        [setTaskName]
      );

    const taskList = storedList.filter(task => task.username === user.name);

    return (
        <ChakraProvider>
            <div className="container main">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Input {...register("taskName", { required: true, minLength: 3 })} borderColor="#282c34"
                        placeholder="Nombre de la tarea" mb={3}/>
                    <Textarea {...register("taskDescription")} borderColor="#282c34"
                        placeholder="Descripción de la tarea" mb={3}/>
                    <Input type="submit" value="Añadir tarea" variant="solid"
                        backgroundColor="#282c34" color="whitesmoke" mb={3}/>
                </form>
                <Divider borderColor="#282c34" mt={3} mb={3}/>
                {taskList.length === 0 ? <Heading as="h4" fontSize="md" textAlign="center">No has añadido tareas aún.
Las tareas que añadas se mostrarán aquí.</Heading>
                    :(
                    <ul>
                        {taskList.map(({ id, name, completed, description }, index) => (
                            <Tarea key = {index} taskKey = {id} nombre = {name} descripcion = {description}
                                completada = {completed}/>
                        ))}
                    </ul>
                )}

            </div>
        </ChakraProvider>
    );
}

export default ListaTareas;