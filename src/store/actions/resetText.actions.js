import {ACTION_TYPES} from "../../interfaces/Constants";


export const resetTextActions = (isResetText) => ({
    type: ACTION_TYPES.resetText,
        isResetText,
});