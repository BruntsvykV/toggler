import React from "react";
import {useDispatch} from "react-redux";
import {resetTextActions} from "../store/actions/resetText.actions";
import {receiveFirstTextActions, receiveSecondTextActions} from "../store/actions/receiveText.actions";
import Button from "../components/Button";
import Input from "../components/Input";

const ReceivedBlock = () => {

    const dispatch = useDispatch();

    const firstTextRef = React.useRef<HTMLInputElement>(null);
    const secondTextRef = React.useRef<HTMLInputElement>(null);

    const receiveInputText = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const firstReceiveText = firstTextRef.current?.value;
        const secondReceiveText = secondTextRef.current?.value;

        if (firstReceiveText) {
            dispatch(resetTextActions(false));
            dispatch(receiveFirstTextActions(firstReceiveText));
            firstTextRef.current.value = '';
        }

        if (secondReceiveText) {
            dispatch(resetTextActions(false));
            dispatch(receiveSecondTextActions(secondReceiveText));
            secondTextRef.current.value = '';
        }
    }

    return (
        <div className="flex justify-between px-10 pt-20">
            <form className="w-full max-w-lg" onSubmit={receiveInputText}>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <div className="md:flex">
                    <Input
                        className="custom-input focus:outline-none"
                        type="text"
                        placeholder="Enter first text"
                        ariaLabel="First text"
                        ref={firstTextRef}
                    />
                    <Input
                        className="custom-input focus:outline-none"
                        type="text"
                        placeholder="Enter second text"
                        ariaLabel="Second text"
                        ref={secondTextRef}
                    />
                    </div>
                    <Button
                        text="Receive"
                        className="btn-receive underline hover:no-underline"
                        buttonType="submit"
                        onClick={receiveInputText}
                    />
                </div>
            </form>
        </div>
    )
}

export default ReceivedBlock;