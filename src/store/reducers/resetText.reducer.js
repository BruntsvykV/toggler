import {ACTION_TYPES} from "../../interfaces/Constants";


const initialState = {
    isResetText: false,
}

const resetTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.resetText :
            return {
                ...state,
                isResetText: action.isResetText,
            }
        default :
                return state;
    }
}

export default resetTextReducer;