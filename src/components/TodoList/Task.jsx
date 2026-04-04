import { useContext } from "react"
import { TaskContext } from "./Context"

function Task({ target, id }) {
    const { task, setTask } = useContext(TaskContext)


    const HandleEdit = (id) => {

        setTask((prev) => {
            return prev.map((item, index) => {
                if (index === id) {
                    return { ...item, action: !item.action }
                }
                return item
            }
            )
        }
        )
        console.log(task)
    }

    const HandleDelete =(id)=>{
         setTask((prev) => {
            return prev.filter((item, index) => index !== id)
        }
        )
    }

    return (
        <div className=" mt-[1%] flex justify-evenly ">
            <div className=" w-3/4 py-2 rounded-md bg-violet-200 pl-5">{target.text}</div>
            <button onClick={() => HandleEdit(id)} className=" px-7 rounded-full bg-violet-700 text-white font-semibold">Edit</button>
            <button onClick={() => HandleDelete(id)} className=" rounded-full px-4.5 bg-violet-700 text-white font-semibold">Delete</button>
        </div>

    )
}
export default Task