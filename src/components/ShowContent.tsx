import React from "react";


interface IShowContentProps {
    isSecondColor: boolean,
    isSecondText: boolean,
    firstText: string,
    secondText: string,
}

const ShowContent: React.FC<IShowContentProps> = (props: IShowContentProps) => {
    return (
        <>
            <div className="text-content">
                <h1 className={props.isSecondColor ? "second-color" : "first-color"}>
                    {props.isSecondText ? props.secondText : props.firstText}
                </h1>
            </div>
        </>
    )
}

export default ShowContent;