"use client"
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import TagsInput from './Tagsinput'
import { createBook, updateBook } from '../lib/BookService'
import Book from './Book'


export interface BookcardProps {
    book?: Book,
    isEdit: boolean
}


const BookForm: React.FC<BookcardProps> = ({ book, isEdit }) => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        tags: [],
        cover: null,
        rating: "1",
        information: ""
    });
    const [tags, setTags] = useState([])

    useEffect(() => {
        if (isEdit) {
            setFormData({
                title: book.title,
                author: book.author,
                tags: book.tags,
                cover: null,
                rating: book.rating,
                information: book.information
            })
            if (book.tags) {
                setTags(book.tags)
            }
        }
    }, [])


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, cover: e.target.files[0] });
        }
    };
    const convertFormDataToBook = (formData: Book): Book => {
        const bookId = book ? book.id : null;
        const convertedBook: Book = {
            id: bookId,
            title: formData.title,
            author: formData.author,
            tags: tags,
            cover: formData.cover,
            rating: formData.rating,
            information: formData.information
        }
        return convertedBook;
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const book = convertFormDataToBook(formData);
        if (isEdit) {
            updateBook(book)
        } else {
            createBook(book)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
    )
}

export default BookForm