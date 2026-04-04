import { useContext } from "react"
import { TaskContext } from "./Context"

function EditTask({ target, id }) {
    const { task, setTask } = useContext(TaskContext)
    const HandleChange = (e, id) => {
        setTask((prev) => {
            return prev.map((item, index) => {
                if (index === id) {
                    return { ...item, text: e.target.value }
                }
                return item
            }
            )
        }
        )
    }
    const HandleDelete = (id) => {
        setTask((prev) => {
            return prev.filter((item, index) => index !== id)
        }
        )
    }
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
    }

    return (
        <div className=" mt-[1%] flex justify-evenly ">
            <input className=" w-3/4 py-2 rounded-md bg-violet-200 pl-5"
                value={target.text}
                onChange={(e) => HandleChange(e, id)}
                type="text"
                placeholder="Provide the task"
            />
            <button onClick={() => HandleEdit(id)} className=" px-7 rounded-full bg-violet-700 text-white font-semibold">Edited</button>
            <button onClick={() => HandleDelete(id)} className=" rounded-full px-4.5 bg-violet-700 text-white font-semibold">Delete</button>
        </div>
    )
}
export default EditTask