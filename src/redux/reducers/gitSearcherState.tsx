import { ADD_SEARCH,CLEAN_SEARCH } from "../actionTypes";

const initialState = {
  searchItems: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SEARCH: {
      const { searchItems  } = action.payload;
      return {
        ...state,
        searchItems
      };
    }
    case CLEAN_SEARCH: {
      return {
        ...state,
        searchItems:[]
      };
    }
    default:
      return state;
  }
}
