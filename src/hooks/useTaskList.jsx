import { useCallback } from "react";
import { useTaskListContext, useTaskListToggleContext } from "../components/TaskListProvider";

function useTaskList() {
  const taskList = useTaskListContext();
  const setTaskList = useTaskListToggleContext();

  const createTask = useCallback((name, description = "") => {
    const task = {
      name,
      description,
      completed: false
    };
    setTaskList((previousTasks) => [...previousTasks, task]);
  }, [setTaskList]);

  const toggleTask = useCallback((index) => {
    setTaskList((previousTasks) => [
      ...previousTasks.slice(0, index),
      {
        ...previousTasks[index],
        completed: !previousTasks[index].completed
      },
      ...previousTasks.slice(index + 1)
    ]);
  }, [setTaskList]);

  return [taskList, createTask, toggleTask];
}

export default useTaskList;