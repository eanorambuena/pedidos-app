import Header from '../components/Header';
import ListaTareas from '../components/ListaTareas';
import TaskListProvider from '../providers/TaskListProvider';

const Tareas = () => {
  return (
    <>
        <header className = "App-header">
            <Header></Header>
        </header>
        <TaskListProvider>
            <ListaTareas></ListaTareas>
        </TaskListProvider>
    </>
  )
}

export default Tareas