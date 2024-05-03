import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm';
import TaskSection from './TaskSection';
import targetIcon from '../../assets/TaskToDo/target.svg';
import doneIcon from '../../assets/TaskToDo/doing.svg';
import starIcon from '../../assets/TaskToDo/done.svg';
const oldTasks = localStorage.getItem('tasks');
const TaskToDo = () => {
    const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    const handleDelete = (taskIndex) => {
        // console.log("cliked");
        const newTasks = tasks.filter((task, index) => index !== taskIndex);
        // console.log(newTasks);
        setTasks(newTasks);
    }
    return (
        <div className='flex flex-col items-center min-h-screen
         bg-gradient-to-t from-orange-50 via-violet-50 to-blue-50 ...'>
            <TaskForm setTasks={setTasks} />
            <main className='flex flex-row w-[80%] justify-evenly mt-8'>
                <TaskSection sectionName={'To Do'} icon={targetIcon} tasks={tasks} status={'To Do'} handleDelete={handleDelete} />
                <TaskSection sectionName={'Doing'} icon={doneIcon} tasks={tasks} status={'Doing'} handleDelete={handleDelete} />
                <TaskSection sectionName={'Done'} icon={starIcon} tasks={tasks} status={'Done'} handleDelete={handleDelete} />
            </main>

        </div>
    )
}

export default TaskToDo
