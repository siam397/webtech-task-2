import React from "react";

const Input = (props) => {
    return (
        <input
            onChange={props.change}
            className=" w-full placeholder:font-bold placeholder:text-xl px-2 outline-none h-20 rounded-lg bg-gray-100"
            placeholder={props.placeholder}
            required={props.required}
            type={props.type}
            defaultValue={props.defaultValue}
            minLength={props.minLength}
        />
    )
}

export default Input;