import Header from '../components/Header';
import ListaPedidos from '../components/ListaPedidos';
import TaskListProvider from '../providers/TaskListProvider';

const Pedidos = () => {
  return (
    <>
        <Header>Pedidos</Header>
        <TaskListProvider>
            <ListaPedidos></ListaPedidos>
        </TaskListProvider>
    </>
  )
}

export default Pedidos