"use client"
import { Menu } from '@headlessui/react'
import { deleteBook } from '../lib/BookService';
interface SettingsMenuProps {
    bookId: string;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ bookId }) => {

    return (
        <Menu as="div" className="">
            <div>
                <Menu.Button className="inline-flex w-full text-black bg-white justify-center rounded-t-md  text-sm font-bold hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    ...
                </Menu.Button>
            </div>
            <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y m-8 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                href={'/edit/' + bookId}
                                className={`${active ? 'bg-black/30 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                                Edit
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${active ? 'bg-black/30 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                onClick={() => deleteBook(bookId)}
                            >
                                Delete
                            </button>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu >
    )
}


export default SettingsMenu;