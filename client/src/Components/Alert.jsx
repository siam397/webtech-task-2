import React from "react";

const Alert = (props) => {

    let isError = props.type === "error" ? true : false;
    let isInfo = props.type === "info" ? true : false;
    let isSuccess = props.type === "success" ? true : false;

    if (isError) {
        return (
            <div role="alert" className=" fixed bottom-4 right-4">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    Error
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>{props.message}</p>
                </div>
            </div>
        )
    }
    if (isSuccess) {
        return (
            <div role="alert" className=" fixed bottom-4 right-4">
                <div className="bg-green-500 text-black font-bold rounded-t px-4 py-2">
                    Success
                </div>
                <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
                    <p>{props.message}</p>
                </div>
            </div>
        )
    }

}

export default Alert;

{/* <div role="alert">
    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Danger
    </div>
    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>Something not ideal might be happening.</p>
    </div>
</div> */}