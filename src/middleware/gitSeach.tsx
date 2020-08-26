
import { addSearchIndex, setToSeachFailed, setToSeachCompleted, setToInit, setToLoading } from "../redux/actions";

export function gitSeach(type, query) {
    return (dispatch) => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        (async () => {
            let response = await fetch(`https://api.github.com/search/${type}?q=${query}`, requestOptions as any)
            let result = await response.json();
            dispatch(addSearchIndex(result.items, query, type));
            dispatch(setToSeachCompleted());
        })().catch(error => {
            dispatch(setToSeachFailed());
        })


    }
}
export function resetSearchState() {
    return (dispatch) => {
        dispatch(setToInit());
    }
}
export function setSeachCompleted() {
    return (dispatch) => {
        dispatch(setToSeachCompleted());
    }
}
export function setSearchStateLoading() {
    return (dispatch) => {
        dispatch(setToLoading());
    }
}