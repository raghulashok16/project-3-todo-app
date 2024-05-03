import React from 'react'
import ButtonTag from './ButtonTag'
import deleteIcon from '../../assets/TaskToDo/delete.svg';
const Card = ({ title, tags, handleDelete, index }) => {
    return (
        <>
            <div className='p-3 w-[90%] mx-auto mt-4 shadow-md hover:shadow-lg rounded-sm bg-amber-100'>

                <div className='flex flex-row  justify-between'>

                    <p className='font-inter text-xs mb-6 mt-3 ml-2'>{title}</p>
                    <div onClick={() => handleDelete(index)}>
                        <img className='w-6 mt-2 ' src={deleteIcon} alt="" />
                    </div>
                </div>
                <div>
                    {tags.map((tag, index) =>
                        tags.length > 0
                        &&
                        <ButtonTag
                            key={index}
                            tagName={tag}
                            selected={true}
                        />)
                    }
                    {/* <ButtonTag tagName={'HTML'} />
                    <ButtonTag tagName={'CSS'} />
                    <ButtonTag tagName={'Javascript'} />
                    <ButtonTag tagName={'React'} /> */}
                </div>
            </div>
        </>
    )
}

export default Card
