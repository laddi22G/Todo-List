import { useState,createContext } from "react"
export const TaskContext = createContext();

function Context(props) {
    const [task, setTask] = useState([])
    return (
        <TaskContext.Provider value={{ task, setTask }}>
            {props.children}
        </TaskContext.Provider> 
    )
}
export default Context 