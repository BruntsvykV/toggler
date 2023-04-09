import React from "react";


interface IButtonProps {
    className?: string,
    text: string,
    buttonType?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    return (
        <>
            <button
                className={props.className}
                type={props.buttonType}
                onClick={props.onClick}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
            >
                {props.text}
            </button>
        </>
    )
}

export default Button;