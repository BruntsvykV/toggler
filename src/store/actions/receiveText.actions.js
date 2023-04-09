import {ACTION_TYPES} from "../../interfaces/Constants";


export const receiveFirstTextActions = (firstText) => ({
    type: ACTION_TYPES.receiveFirstText,
    firstText,
})

export const receiveSecondTextActions = (secondText) => ({
    type: ACTION_TYPES.receiveSecondText,
    secondText,
})