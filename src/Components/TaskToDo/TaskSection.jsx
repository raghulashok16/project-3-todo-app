import React from 'react';
import Card from './Card';

const TaskSection = ({ sectionName, icon }) => {
    // console.log(img)
    return (

        <>
            <section className='font-inter text-md  font-medium w-[80%]'>
                <div className='text-center'>
                    <img src={icon} alt="" className='w-6 mr-2 inline' />
                    {sectionName}
                </div>
                <Card title={'Try to comple the task data'} />
            </section>
        </>
    )
}

export default TaskSection
