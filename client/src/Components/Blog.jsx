import React from "react";

const Blog = (props) => {
    return (
        <a
            className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg w-96 hover:shadow-lg hover:bg-gray-100"
            href=""
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>

            <div className="justify-between sm:flex">
                <div>
                    <h5 className="text-xl font-bold text-gray-900">
                        {props.title}
                    </h5>
                    <p className="mt-1 text-xs font-medium text-gray-600">By {props.username}</p>
                </div>
            </div>

            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-gray-500 line-clamp-2">
                    {props.content}
                </p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-gray-600">Published</dt>
                    <dd className="text-xs text-gray-500">31st June, 2021</dd>
                </div>

            </dl>
        </a>


    )
}

export default Blog;