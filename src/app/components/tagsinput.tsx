"use client"
import React from 'react'

const TagsInput = ({ tags, setTags }) => {

    function handleKeyDown(e:  React.KeyboardEvent<HTMLDivElement>) {
        // If user did not press enter key, return
        if (e.key !== 'Enter') return
        e.preventDefault();
        // Get the value of the input
        const value = e.target.value
        // If the value is empty, return
        if (!value.trim()) return
        // Add the value to the tags array
        setTags([...tags, value])
        // Clear the input
        e.target.value = ''
        console.log(tags)
    }
    function removeTag(index: number) {
        setTags(tags.filter((el: object, i: number) => i !== index))
    }
    return (
        <>
            <div className='flex flex-row gap-2 m-2'>
                {tags ? tags.map((tag: string, index: number) => (
                    <div key={index}>
                        <span className="text">#{tag}</span>
                        <span className="close" onClick={() => removeTag(index)}>&times;</span>
                    </div>
                )) : ""}
            </div>

            <input type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type somthing"
                onKeyDown={handleKeyDown} />
        </>
    )
}

export default TagsInput