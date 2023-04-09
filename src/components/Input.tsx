import React from "react";


interface IInput {
    className?: string,
    type?: string,
    placeholder?: string,
    ariaLabel?: string,
}

export type InputRef = HTMLInputElement;

const Input = React.forwardRef<InputRef, IInput>((props: IInput, inputRef) => {
    return (
        <>
            <input
                className={props.className}
                type={props.type}
                placeholder={props.placeholder}
                aria-label={props.ariaLabel}
                ref={inputRef}
            />
        </>
    )
})

export default Input;