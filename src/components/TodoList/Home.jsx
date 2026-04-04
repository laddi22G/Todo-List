import { useContext, useState, useEffect } from "react";
import { TaskContext } from "./Context";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";


function Home() {
    const { register, handleSubmit, reset, watch } = useForm({
        defaultValues: { work: "" }
    });
    const { task, setTask } = useContext(TaskContext);
    const value = watch("work");

    const HandleClick = (data, e) => {
        if (!data.work.trim()) {
            return;
        }
        setTask((prev) => [...prev, { text: data.work, action: true }]);
        console.log(task)
        reset();
    }
    useEffect(() => {
    }, [task]);

    return (
        <div className="">
            <div className="">
                <form className="mx-[5%] flex justify-center mb-[3%] " action="" onSubmit={handleSubmit(HandleClick)}>
                    <input
                        {...register("work")}
                        className=" p-3 bg-purple-200 rounded-full w-full font-semibold " type="text"
                        placeholder="Provide the task"
                    />
                    <input className=" ml-8 rounded-full px-5 font-semibold bg-indigo-700 text-white " type="submit" />
                </form>

            </div>
        </div>
    )
}

export default Home