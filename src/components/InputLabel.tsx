import React, { LabelHTMLAttributes } from 'react'

export default function InputLabel({className = '', value, children, ...props}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string}) {
    return (
        <label 
        className={ `block mb-2 text-sm font-medium` +className }
        {...props}
        >{value ? value : children}</label>
    )
}
