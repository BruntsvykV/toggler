import {ACTION_TYPES} from "../../interfaces/Constants";

const firstInitialState = {
    firstText: "",
}

const secondInitialState = {
    secondText: "",
}

export const receiveFirstTextReducer = (state = firstInitialState, action) => {
    switch (action.type) {
        case  ACTION_TYPES.receiveFirstText :
            return {
                ...state,
                firstText: action.firstText,
            }
        default:
            return state;
    }
}

export const receiveSecondTextReducer = (state = secondInitialState, action) => {
    switch (action.type) {
        case  ACTION_TYPES.receiveSecondText :
            return {
                ...state,
                secondText: action.secondText,
            }
        default:
            return state;
    }
}