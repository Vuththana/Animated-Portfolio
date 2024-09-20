import React, { forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    {type, className = '', isFocused = false, ...props}: InputHTMLAttributes<HTMLInputElement> & { isFocused: boolean }
    , ref
) {
    const localRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        focus: () =>  localRef.current?.focus()
    }))

    useEffect(() => {
        if(isFocused) {
            localRef.current?.focus()
        }
    }, [])
    return (
        <input 
        {...props}
        type={type}
        className={
            'w-full sm:w-[500px] bg-gray-50 text-black border-gray-400 border p-2.5 rounded-lg focus:outline-gray-900 focus:shadow-lg ' +
            className
        }
        ref={localRef}
        />

    )
})