import React from 'react';

const TaskSection = ({ sectionName, icon }) => {
    // console.log(img)
    return (

        <>
            <section className='font-inter'><img src={icon} alt="" className='w-5 mr-2 inline' />{sectionName}</section>
        </>
    )
}

export default TaskSection
