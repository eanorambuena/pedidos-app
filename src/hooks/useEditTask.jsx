import { useCallback } from "react";
import { useTaskListToggleContext } from "../components/TaskListProvider";

function useEditTask() {
    const setTaskList = useTaskListToggleContext();

    const editTask = useCallback((index, name, description)  => {
        const task = {
            name,
            description,
            completed: false
        };
        setTaskList((previousTasks) => {
            return [...previousTasks.slice(0, index),
                task, ...previousTasks.slice(index + 1)]
        });
    }, [setTaskList]);

    return editTask;
}

export default useEditTask