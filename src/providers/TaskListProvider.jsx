import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const taskListContext = React.createContext();
const taskListToggleContext = React.createContext();

export function useTaskListContext() {
    return useContext(taskListContext);
}

export function useTaskListToggleContext() {
    return useContext(taskListToggleContext);
}

function TaskListProvider({children}) {
    const [taskList, setTaskList] = useLocalStorage("taskList", []);

  return (
    <taskListContext.Provider value = {taskList}>
        <taskListToggleContext.Provider value = {setTaskList}>
            {children}
        </taskListToggleContext.Provider>
    </taskListContext.Provider>
  )
}

export default TaskListProvider