import Home from "./components/TodoList/Home"
import Task from "./components/TodoList/Task"
import { useContext } from "react"
import { TaskContext } from "./components/TodoList/Context"
import EditTask from "./components/TodoList/EditTask"

function App() {
  const { task, setTask } = useContext(TaskContext)

  return (
    <div className="w-screen min-h-screen  bg-blue-400">

      <div className=" bg-sky-600 mx-[15%] py-[5%] min-h-screen">

        <Home />
        {
          task.map((item, index) => {
            return (
            item.action ? ( <Task target={item} key={index} id={index}  />) : (<EditTask target={item} key={index} id={index} />)
            )
          })
        }


      </div>

    </div>)
}

export default App;


// 2:07:44