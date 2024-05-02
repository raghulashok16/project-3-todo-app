import React from 'react'
import ButtonTag from './ButtonTag'
import deleteIcon from '../../assets/TaskToDo/delete.svg';
const Card = ({ title }) => {
    return (
        <>
            <div className='p-3 w-[90%] mx-auto mt-4 shadow-md hover:shadow-lg rounded-sm'>

                <div className='flex flex-row  justify-between'>

                    <p className='font-inter text-sm mb-10 mt-3 ml-2'>{title}</p>
                    <div>
                        <img className='w-6 mt-2 ' src={deleteIcon} alt="" />
                    </div>
                </div>
                <div>
                    <ButtonTag tagName={'HTML'} />
                    <ButtonTag tagName={'CSS'} />
                    <ButtonTag tagName={'Javascript'} />
                    <ButtonTag tagName={'React'} />
                </div>
            </div>
        </>
    )
}

export default Card
