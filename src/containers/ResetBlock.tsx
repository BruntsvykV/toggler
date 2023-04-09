import React from "react";
import {useDispatch} from "react-redux";
import {resetTextActions} from "../store/actions/resetText.actions";
import {receiveFirstTextActions, receiveSecondTextActions} from "../store/actions/receiveText.actions";
import Button from "../components/Button";

const ResetBlock = () => {

    const dispatch = useDispatch();

    const resetText = () => {
        dispatch(resetTextActions(true));
        dispatch(receiveFirstTextActions(''));
        dispatch(receiveSecondTextActions(''));
    }

    return (
        <div className="flex justify-center md:justify-end pt-10 md:pt-0 px-10 md:-mt-16">
            <Button
                text="Reset"
                className="btn-reset underline hover:no-underline"
                onClick={resetText}
            />
        </div>
    )
}

export default ResetBlock;