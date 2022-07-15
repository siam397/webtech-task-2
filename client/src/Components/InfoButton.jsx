import React from "react"

const InfoButton = (props) => {
    return (
        <a className={`${props.class} inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:shadow-xl active:text-indigo-500 focus:outline-none focus:ring`} href="/download">
            {props.text}
        </a>
    )
}
export default InfoButton