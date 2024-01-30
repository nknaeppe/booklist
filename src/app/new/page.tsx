"use client"
import React, { ChangeEvent, useEffect } from 'react'
import { useState } from 'react'
import TagsInput from '../components/Tagsinput';

const NewBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        tags: [],
        cover: null,
        rating: '1',
        information: ''
    });
    const [tags, setTags] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, cover: e.target.files[0] });
        }
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('author', formData.author);
            formDataToSend.append('rating', formData.rating);
            formDataToSend.append('information', formData.information);
            formDataToSend.append('tags', JSON.stringify(tags))
            formDataToSend.append('cover', formData.cover); // Append the file
            const response = await fetch('/api/new', {
                method: 'POST',
                body: formDataToSend
            });

            // Handle response
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <main className="my-20 mx-20 flex flex-col flex-wrap justify-center gap-4 p-4 h-screen">
<h1 className='font-bold text-center text-3xl'>Add a new Book</h1>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                        Title
                        <input type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="book title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Author
                        <input type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange} />
                    </label>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        More information
                        <textarea
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder='Write your thoughts'
                            name="information"
                            value={formData.information}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='mb-5'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Book cover
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type='file'
                            name='cover'
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
                <div className='mb-5'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                        Rating
                        <select name='rating' value={formData.rating} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                </div>
                <div className='mb-5'>
                    <TagsInput tags={tags} setTags={setTags}></TagsInput>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </main>
    )
}

export default NewBook
