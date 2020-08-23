import { ADD_SEARCH,CLEAN_SEARCH } from "./actionTypes";



export const addSearch = searchResult => ({
  type: ADD_SEARCH,
  payload: {
    searchResult
  }
});