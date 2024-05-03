import React from 'react';
import Card from './Card';

const TaskSection = ({ sectionName, icon, tasks, status, handleDelete }) => {
    // console.log(img)
    // console.log(tasks, status)
    return (

        <>
            <section className='font-inter text-md  font-medium w-[80%]'>
                <div className='text-center'>
                    <img src={icon} alt="" className='w-6 mr-2 inline' />
                    {sectionName}
                </div>
                {
                    tasks.map((task, index) =>
                        task.status === status
                        &&
                        <Card key={index}
                            title={task.task}
                            handleDelete={handleDelete}
                            tags={task.tags}
                            index={index}
                        />)
                }
            </section>
            {/* <Card title={'Try to comple the task data'} /> */}
        </>

    )
}

export default TaskSection
