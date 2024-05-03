import React, { useState } from 'react'
import ButtonTag from './ButtonTag'

const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: '',
        status: 'To Do',
        tags: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(pre => {
            return { ...pre, [name]: value };
        });
    };
    const selectTag = (tag) => {
        // console.log(tag);
        if (taskData.tags.some(item => item === tag)) {
            const filteredTags = taskData.tags.filter(item => item != tag);
            setTaskData(pre => {
                return { ...pre, tags: filteredTags };
            });
            // console.log(taskData);
        } else {
            setTaskData(pre => {
                return { ...pre, tags: [...pre.tags, tag] };
            })
            // console.log(taskData);
        }
    };
    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(pre => {
            return [...pre, taskData];
        });
        setTaskData({
            task: '',
            status: 'To Do',
            tags: [],
        });

    };

    return (
        <>
            <header className='flex flex-row justify-center mt-10'>
                <form className='w-[full]' onSubmit={handleSubmit}>
                    <input type="text"
                        name="task"
                        placeholder='Enter your Task'
                        value={taskData.task}
                        className='w-[100%] border-2 rounded-sm placeholder:text-center text-center p-1 border-gray-900 mb-5 bg-slate-100'
                        onChange={handleChange}
                    />
                    <br />
                    <ButtonTag tagName={'HTML'} selectTag={selectTag} selected={checkTag('HTML')} />
                    <ButtonTag tagName={'CSS'} selectTag={selectTag} selected={checkTag('CSS')} />
                    <ButtonTag tagName={'Javascript'} selectTag={selectTag} selected={checkTag('Javascript')} />
                    <ButtonTag tagName={'React'} selectTag={selectTag} selected={checkTag('React')} />
                    <select className='p-2 rounded-md border-2 mx-3 selection:bg-red-500 font-inter font-medium text-sm inline'
                        onChange={handleChange}
                        name="status"
                        value={taskData.status} >
                        <option value="To Do" >To Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done" >Done</option>
                    </select>
                    <button type='submit'
                        className='p-2 rounded-md border-2 mx-3 selection:bg-red-500 bg-violet-600 text-white'>
                        + Add Task
                    </button>
                </form>
            </header>
        </>
    )
}

export default TaskForm
