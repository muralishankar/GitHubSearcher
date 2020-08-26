import { SET_INIT, SET_LOADING, SET_SEARCH_COMPLETED, SET_SEARCH_FAILED, ADD_SEARCH_INDEX } from "./actionTypes";



export const addSearchIndex = (searchResult, keywords, type) => ({
  type: ADD_SEARCH_INDEX,
  payload: {
    searchResult,
    keywords,
    type
  }
});

export const setToInit = () => {
  return {
    type: SET_INIT
  }
}
export const setToLoading = () => {
  return {
    type: SET_LOADING
  }
}
export const setToSeachCompleted = () => {
  return {
    type: SET_SEARCH_COMPLETED
  }
}
export const setToSeachFailed = () => {
  return {
    type: SET_SEARCH_FAILED
  }
}