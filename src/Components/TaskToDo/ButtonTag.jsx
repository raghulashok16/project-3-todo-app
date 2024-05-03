import React from 'react'

const ButtonTag = ({ tagName, selectTag, selected }) => {
    const tagSyle = {
        HTML: 'bg-violet-500 text-white',
        CSS: 'bg-red-500 text-white',
        Javascript: 'bg-blue-500 text-white',
        React: 'bg-green-500 text-white',
        default: 'bg-white',
    }
    return (
        <>
            <button className={`px-2 rounded-md border-2 mr-2 font-inter font-medium text-sm ${selected ? tagSyle[tagName] : tagSyle.default}`}
                onClick={() => selectTag(tagName)}
                type='button'>
                {tagName}
            </button>
        </>
    )
}

export default ButtonTag
