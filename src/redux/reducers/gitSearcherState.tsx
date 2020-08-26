import { SET_INIT, SET_LOADING, SET_SEARCH_COMPLETED, SET_SEARCH_FAILED } from "../actionTypes";
import { searchState } from '../../constants';

const initialState = {
  stateOfSearch: searchState.INIT,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_INIT: {
      return { ...state, stateOfSearch: searchState.INIT };
    }
    case SET_LOADING: {
      return {
        ...state,
        stateOfSearch: searchState.LOADING
      };
    }
    case SET_SEARCH_COMPLETED: {
      return {
        ...state,
        stateOfSearch: searchState.SEARCH_COMPLETED
      };
    }
    case SET_SEARCH_FAILED: {
      return {
        ...state,
        stateOfSearch: searchState.ERROR
      };
    }
    default:
      return state;
  }
}
