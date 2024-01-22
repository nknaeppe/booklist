import React from 'react'
import StarRating from '../components/rating'

const NewBook = () => {
    return (
        <main className="my-20 mx-20 flex flex-wrap justify-center gap-4">
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium">
                        Title
                        <input type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="It">
                        </input>
                    </label>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium">
                        Author
                        <input type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Steven King">
                        </input>
                    </label>
                </div>
                <div className="mb-5">
                    <label>
                        Book Cover
                        <input type='file'></input>
                    </label>
                </div>
                <label className="block mb-2 text-sm font-medium">
                    Rating
                    <StarRating></StarRating>
                </label>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium">
                        Your message
                        <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    </label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </main>
    )
}

export default NewBook