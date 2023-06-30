import React from 'react'

const PrimaryButton = ({ content, task, className }) => {
    return (
        <button
            onClick={task}
            className={`bg-gradient text-black text-base font-bold rounded-lg uppercase ${className}`}
        >
            {content}
        </button>
    )
}

export default PrimaryButton;