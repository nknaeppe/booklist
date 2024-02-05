import React from 'react'
import Image from "next/image"
import SettingsMenu from './SettingsMenu';
import Book from './Book';

export interface BookcardProps {
    book: Book;
}

const Bookcard: React.FC<BookcardProps> = ({ book }) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <SettingsMenu bookId={book.id}></SettingsMenu>
            {book?.cover ? <Image className="w-full" height={400} width={200} src={`/tmp/` + book.cover} alt="book cover" ></Image> : <></>}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <div className="font-semibold text-sm mb-2">{book.author}</div>
                <p className="text-gray-700 text-base">
                    {book.information}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {
                    Array.from(Array(5).keys()).map(star => {
                        if (star < book.rating) {
                            return '★';
                        } else {
                            return '☆'
                        }
                    })
                }
            </div>
            <div className="px-6 pt-4 pb-2">
                {
                    book.tags ?
                        book.tags.map(
                            (tag: string, index: number) =>
                                <span
                                    key={index}
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                >{tag}</span>
                        )
                        : ""
                }
            </div>
        </div >
    )
}

export default Bookcard;