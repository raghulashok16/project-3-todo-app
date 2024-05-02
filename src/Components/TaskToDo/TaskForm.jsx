import React, { useState } from 'react'
import ButtonTag from './ButtonTag'

const TaskForm = () => {
    const [Task, setTask] = useState();
    console.log(Task)
    const handleTaskChange = e => {
        setTask(e.target.value);
    }
    return (
        <>
            <header className='flex flex-row justify-center mt-10'>
                <form className='w-[full]'>
                    <input type="text"
                        name="taskName"
                        id="" placeholder='Enter your Task'
                        className='w-[100%] border-2 rounded-sm placeholder:text-center text-center p-1 border-gray-900 mb-5 bg-slate-100'
                        onChange={handleTaskChange} />

                    <br />
                    <ButtonTag tagName={'HTML'} />
                    <ButtonTag tagName={'CSS'} />
                    <ButtonTag tagName={'Javascript'} />
                    <ButtonTag tagName={'React'} />

                    <select className='p-2 rounded-md border-2 mx-3 selection:bg-red-500 font-inter font-medium text-sm inline'>
                        <option value="todo" >To Do</option>
                        <option value="doing">Doing</option>
                        <option value="done" >Done</option>
                    </select>
                    <button className='p-2 rounded-md border-2 mx-3 selection:bg-red-500 bg-violet-600 text-white'>+ Add Task</button>
                </form>
            </header>
        </>
    )
}

export default TaskForm
