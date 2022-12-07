import { useCallback } from 'react';
import { useForm } from "react-hook-form";
import { Input, Divider, Textarea, Heading } from '@chakra-ui/react';

import useFirebase from '../hooks/useFirebase';
import Tarea from "./Tarea";
import useUser from '../hooks/useUser';

const ListaPedidos = () => {
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

    const fieldStyle = {borderColor: "brand.3", _placeholder: {color: "brand.2"}};

    return (
        <>
            <div className="container main">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Input {...register("taskName", { required: true, minLength: 3 })}
                        {...fieldStyle} placeholder="Nombre de la tarea" mb={3}/>
                    <Textarea {...register("taskDescription")}
                        {...fieldStyle} placeholder="Descripción de la tarea" mb={3}/>
                    <Input type="submit" value="Añadir tarea" variant="solid"
                        backgroundColor="brand.2" color="brand.0" mb={3}/>
                </form>
                <Divider borderColor="brand.3" mt={3} mb={3}/>
                {taskList.length === 0 ? <Heading as="h4" fontSize="md" textAlign="center">No has añadido tareas aún.
Las tareas que añadas se mostrarán aquí.</Heading>
                    :(
                    <ul>
                        {taskList.map(({ id, name, completed, description }, index) => (
                            <Tarea key = {index} taskKey = {id} nombre = {name} descripcion = {description}
                                completada = {completed} backgroundColor="brand.3"/>
                        ))}
                    </ul>
                )}

            </div>
        </>
    );
}

export default ListaPedidos;