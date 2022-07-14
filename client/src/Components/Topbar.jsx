import React from "react"
import { Link, NavLink } from "react-router-dom"

const Topbar = () => {
    return (
        <header className="border-b border-gray-100">
            <div
                className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
            >
                <div className="flex items-center">
                    <button type="button" className="p-2 sm:mr-4 lg:hidden">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <a href="" className="flex">
                        <span className="inline-block w-32 h-10 bg-gray-200 rounded-lg"></span>
                    </a>
                </div>

                <div className="flex items-center justify-end flex-1">
                    <nav
                        className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "block h-16 leading-[4rem] border-b-4 text-red-700 border-current" : "block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                            }
                        >
                            Blogs
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "block h-16 leading-[4rem] border-b-4 text-red-700 border-current" : "block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                            }
                            to="/newBlog"
                        // className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                        >
                            New Blog
                        </NavLink>

                        <NavLink
                            to="/myBlogs"
                            className={({ isActive }) =>
                                isActive ? "block h-16 leading-[4rem] border-b-4 text-red-700 border-current" : "block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
                            } >
                            My Blogs
                        </NavLink>
                    </nav>

                    <div className="flex items-center ml-8">
                        <div
                            className="flex items-center border-gray-100 divide-x divide-gray-100 border-x"
                        >

                            <span>
                                <a
                                    href="/account"
                                    className="block p-6 border-b-4 border-transparent hover:border-red-700"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>

                                    <span className="sr-only"> Account </span>
                                </a>
                            </span>

                            <span className="hidden sm:block">
                                <a
                                    href="/search"
                                    className="block p-6 border-b-4 border-transparent hover:border-red-700"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>

                                    <span className="sr-only"> Search </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Topbar