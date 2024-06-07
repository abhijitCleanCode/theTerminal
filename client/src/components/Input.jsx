import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();

    return (
        <div className="w-full flex flex-col">
            {
                label && <label
                    className='inline-block mb-4 pl-1 text-white'
                    htmlFor={id}>
                    {label}
                </label>
            }
            <input type={type}
                className={`bg-[#0B1531] py-4 px-6 placeholder:text-gray-300 text-white rounded-[15px] outline-none border-none font-medium`}
                id={id}
                {...props}
                ref = {ref}
            />
        </div>
    )
}
)

export default Input