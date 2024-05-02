import React from 'react'
import "./App.css";
import TaskForm from './Components/TaskToDo/TaskForm';
import TaskSection from './Components/TaskToDo/TaskSection';
import targetIcon from './assets/TaskToDo/target-image.png';
import doneIcon from './assets/TaskToDo/done-image.jpg';
import starIcon from './assets/TaskToDo/star-image.jpg';
const App = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-gradient-to-t from-orange-50 via-violet-50 to-blue-50 ...'>
      <TaskForm />
      <main className='flex flex-row w-[80%] justify-evenly mt-8'>
        <TaskSection sectionName={'To Do'} icon={targetIcon} />
        <TaskSection sectionName={'Doing'} icon={doneIcon} />
        <TaskSection sectionName={'Done'} icon={starIcon} />
      </main>

    </div>
  )
}

export default App
