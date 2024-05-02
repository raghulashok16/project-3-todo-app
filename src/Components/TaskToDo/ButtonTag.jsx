import React from 'react'

const ButtonTag = ({ tagName }) => {
    return (
        <>
            <button className='px-2 rounded-md border-2 mx-3 selection:bg-red-500 font-inter font-medium text-sm '>{tagName}</button>
        </>
    )
}

export default ButtonTag
