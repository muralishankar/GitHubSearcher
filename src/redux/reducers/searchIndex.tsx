import { ADD_SEARCH_INDEX } from "../actionTypes";
import * as _ from "lodash";

const initialState = {
    resultContainer: { users: {}, repositories: {} },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_SEARCH_INDEX: {
            const { searchResult,
                keywords,
                type } = action.payload;
            let new_Index = _.get(state.resultContainer, type);
            new_Index[keywords] = searchResult;
            return {
                ...state,
                resultContainer: { ...state.resultContainer, ...new_Index }
            };
        }
        default:
            return state;
    }
}
