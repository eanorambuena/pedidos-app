import { useCallback } from "react";
import { useTaskListToggleContext } from "../components/TaskListProvider";

function useDeleteTask() {
    const setTaskList = useTaskListToggleContext();

    const toggleTask = useCallback((index) => {
        debugger;
        setTaskList((previousTasks) => [
        ...previousTasks.slice(0, index),
        ...previousTasks.slice(index + 1)
        ]);
    }, [setTaskList]);

    return toggleTask;
}

export default useDeleteTask